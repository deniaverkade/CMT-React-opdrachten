import MovieItem from './MovieItem';

const MovieList = ({ movies, onDelete,number}) => {
  if (movies.length === 0) {
    return <p>No favorite movies yet. Add some!</p>;
  }

  return (
    <ul>
      {movies.map((movie, ) => (
        <MovieItem movie={movie} onDelete={onDelete} key={number}/>
      ))}
    </ul>
  );
}

export default MovieList;


