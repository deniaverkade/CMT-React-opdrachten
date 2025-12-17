const MovieItem = ({ movie, onDelete, number }) => {
  return (
    <li key={number}>
      {movie}
      <button onClick={() => onDelete(movie)}>Remove</button>
    </li>
  );
};

export default MovieItem;
