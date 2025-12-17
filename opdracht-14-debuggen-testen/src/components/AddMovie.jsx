import { useState } from "react";
const AddMovie = ({ onAdd ,key2})  => {
  const [movie, setMovie] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movie === '') {
      alert('Movie name cannot be empty');
      return;
    }
    onAdd(movie); 
   setMovie('');
  };

 

  return (
    <form onSubmit={handleSubmit} key={key2}>
      <input 
        type="text"
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
        placeholder="Add a new movie"
      />
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovie;
