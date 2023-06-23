import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
