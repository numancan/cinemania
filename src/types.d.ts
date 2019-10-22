interface Movie {
  id: number;
  title: string;
  poster_path?: string;
  backdrop_path?: string;
}

interface MovieDetails extends Movie {
  overview: string;
  credits: { cast: Array<{ profile_path: string }> };
  videos: { results: Array<{ key: string; name: string }> };
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
