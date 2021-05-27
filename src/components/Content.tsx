import { Header } from './Header';
import { MovieCard } from './MovieCard';

import { MovieProps } from '../App';

interface ContentProps {
  movies: MovieProps[];
  selectedGenre: {
    title: string;
  }
}

export function Content(props: ContentProps) {
  return (
    <div className="container">
      <Header selectedGenre={props.selectedGenre} />

      <main>
        <div className="movies-list">
          {props.movies.map(movie => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  )
}