const { testData } = require('../../constants/testData.js');

describe('GenreSelect e2e tests', () => {
  beforeEach(async () => {
    const genreMock = await browser.mock('http://localhost:4000/genres', { method: 'get' });
    await browser.url('/');
    genreMock.respond(testData.genres, {
      statusCode: 200,
      fetchResponse: false,
    });
    await browser.refresh();
  });

  it('when clicking on genre should select it', async () => {
    const allGenre = await $('[data-genre="All"]');
    expect(allGenre).toHaveText('ALL');
    expect(allGenre).not.toHaveElementClassContaining('selectedGenre');
    await allGenre.click();
    expect(allGenre).toHaveElementClassContaining('selectedGenre');
  });

  it('when clicking on one genre should deselect previousely selcted one', async () => {
    const allGenre = await $('[data-genre="All"]');
    expect(allGenre).toHaveText('ALL');
    expect(allGenre).not.toHaveElementClassContaining('selectedGenre');
    await allGenre.click();
    expect(allGenre).toHaveElementClassContaining('selectedGenre');

    const comedyGenre = await $('[data-genre="Drama"]');
    await comedyGenre.click();
    expect(comedyGenre).toHaveElementClassContaining('selectedGenre');
    expect(allGenre).not.toHaveElementClassContaining('selectedGenre');
  });

  it('it should render all genres passed in props', async () => {
    const genreList = ['All', ...testData.genres];
    for (let genre of genreList) {
      const node = await $(`[data-genre="${genre}"]`);
      expect(node).toHaveText(genre.toUpperCase());
    }
  });
});
