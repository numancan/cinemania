interface Movie {
  id: number;
  title: string;
  poster_path?: string;
  backdrop_path?: string;
}

interface Cast {
  id: string;
  name: string;
  profile_path: string;
  character: string;
}

interface MovieDetails extends Movie {
  overview: string;
  credits: { cast: Array<Cast> };
  videos: { results: Array<{ key: string; name: string }> };
  genres: Array<{ name: string }>;
  runtime: string;
  vote_average?: string;
  hall_id?: number;
}

interface Action {
  type: string;
  payload: {
    price: number;
  };
}

interface TicketPrice {
  price: number;
  type: string;
}
