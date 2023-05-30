const { testData } = require('../../constants/testData.js');

describe('MovieListPage e2e tests', () => {
  let genreMock;
  let movieMock;
  beforeEach(async () => {
    genreMock = await browser.mock('http://localhost:4000/genres', { method: 'get' });
    await browser.url('/');
    genreMock.respond(testData.genres, { statusCode: 200, fetchResponse: false });
  });

  it('should mount all test movies as tiles', async () => {
    movieMock = await browser.mock('http://localhost:4000/movies*', { method: 'get' });
    movieMock.respond(testData.movieResponse, { statusCode: 200, fetchResponse: false });
    await browser.refresh();

    for (let movie of testData.movieResponse.data) {
      const movieTile = await $(`[data-movie-id="${movie.id}"]`);
      expect(movieTile).toExist();
    }
  });

  it('should build a correct query param when clicking on Drama genre', async () => {
    movieMock = await browser.mock('http://localhost:4000/movies?sortBy=release_date&sortOrder=asc&filter=Drama', { method: 'get' });
    const dramaResponse = {
      totalAmount: 1,
      data: [testData.movies.drama],
    };
    movieMock.respond(dramaResponse, { statusCode: 200, fetchResponse: false });

    const dramaGenre = await $('[data-genre="Drama"]');
    await dramaGenre.click();
    expect(dramaGenre).toHaveElementClassContaining('selectedGenre');
    await browser.refresh();

    expect(movieMock.calls.length).toBe(1);

    const dramaTile = await $(`[data-movie-id="${testData.movies.drama.id}"]`);
    expect(dramaTile).toExist();
    let movieTile = await $(`[data-movie-id="${testData.movies.movie1.id}"]`);
    expect(movieTile).not.toExist();
    movieTile = await $(`[data-movie-id="${testData.movies.movie2.id}"]`);
    expect(movieTile).not.toExist();
  });

  it('should build a correct query params when click on search btn', async () => {
    movieMock = await browser.mock('http://localhost:4000/movies?sortBy=release_date&sortOrder=asc&search=star&searchBy=title', {
      method: 'get',
    });
    const searchResponse = {
      totalAmount: 1,
      data: [testData.movies.movie1],
    };
    movieMock.respond(searchResponse, { statusCode: 200, fetchResponse: false });

    const searchInput = await $('[data-testid="SearchForm"] input');
    await searchInput.setValue('star');
    const searchBtn = await $('[data-testid="SearchForm"] button');
    await searchBtn.click();
    await browser.refresh();

    expect(movieMock.calls.length).toBe(1);

    let movieTile = await $(`[data-movie-id="${testData.movies.movie1.id}"]`);
    expect(movieTile).toExist();

    movieTile = await $(`[data-movie-id="${testData.movies.drama.id}"]`);
    expect(movieTile).not.toExist();
    movieTile = await $(`[data-movie-id="${testData.movies.movie2.id}"]`);
    expect(movieTile).not.toExist();
  });
});
