// TODO: CATCH ERROR
export const fetchMovies = async (): Promise<Movie[]> => {
  const response = await fetch('https://cinemania-ab421.firebaseio.com/movies.json');
  const movies: Movie[] = await response.json();

  return movies;
};

export const fetchMovieDetailsByID = async (movieID: string): Promise<MovieDetails> => {
  const response = await fetch(
    `https://cinemania-ab421.firebaseio.com/movieDetails/${movieID}.json`,
  );
  const movieDetails: MovieDetails = await response.json();

  return movieDetails;
};

export const fetchTicketPrices = async (): Promise<TicketPrice[]> => {
  const response = await fetch('https://cinemania-ab421.firebaseio.com/prices.json');
  const ticketPrices: TicketPrice[] = await response.json();

  return ticketPrices;
};

export const fetchSoldSeats = async (hallID: number, showtime: string): Promise<string[]> => {
  const response = await fetch(
    `https://cinemania-ab421.firebaseio.com/soldSeats/${hallID}/${showtime}.json`,
  );
  const soldSeats: string[] = await response.json();

  return soldSeats;
};
