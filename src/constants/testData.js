const dramaMovie = {
  id: 3,
  title: 'Fifty Shades Freed',
  tagline: "Don't miss the climax",
  vote_average: 6.1,
  vote_count: 1195,
  release_date: '2018-02-07',
  poster_path: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
  overview:
    'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
  budget: 55000000,
  revenue: 136906000,
  genres: ['Drama', 'Romance'],
  runtime: 106,
};

const movie1 = {
  id: 1,
  title: 'Star Wars: The Last Jedi',
  tagline: 'The Saga Continues',
  vote_average: 7.1,
  vote_count: 4732,
  release_date: '2017-12-1',
  poster_path: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
  overview:
    'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
  budget: 200000000,
  revenue: 1325937250,
  genres: ['Fantasy', 'Adventure', 'Science Fiction'],
  runtime: 152,
};

const movie2 = {
  id: 2,
  title: 'Black Panther',
  tagline: 'Long live the king',
  voteAverage: 7.3,
  vote_count: 3788,
  release_date: '2018-02-1',
  poster_path: 'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
  overview:
    "King T'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without.  Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister,  members of the Dora Milaje (the Wakandan \"special forces\"), and an American secret agent, to prevent Wakanda from being dragged into a world war.",
  budget: 200000000,
  revenue: 1245257672,
  genres: ['Action', 'Adventure', 'Fantasy', 'Science Fiction'],
  runtime: 134,
};

exports.testData = {
  genres: ['Adventure', 'Drama', 'Romance', 'Fantasy'],
  movieResponse: {
    totalAmount: 3,
    data: [movie1, movie2, dramaMovie],
  },
  movies: {
    drama: dramaMovie,
    movie1,
    movie2,
  },
};
