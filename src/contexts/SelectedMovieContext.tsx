import React, { createContext, FC, useState } from 'react';

interface State {
  selectedMovie: MovieDetails;
  setSelectedMovie: (selectedMovie: MovieDetails) => void;
}

const initialState: State = {
  selectedMovie: {
    id: 0,
    title: '',
    overview: '',
    credits: { cast: [] },
    videos: { results: [{ key: '', name: '' }] },
    genres: [],
    runtime: '',
  },
  setSelectedMovie: () => {},
};

export const SelectedMovieContext = createContext(initialState);

export const SelectedMovieProvider: FC = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState(initialState.selectedMovie);

  return (
    <SelectedMovieContext.Provider value={{ selectedMovie, setSelectedMovie }}>
      {children}
    </SelectedMovieContext.Provider>
  );
};
