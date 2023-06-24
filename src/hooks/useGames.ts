import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (selectedGenre: number | null) => {
  selectedGenre = selectedGenre !== -1 ? selectedGenre : null;
  return useData<Game>("/games", { params: { genres: selectedGenre } }, [
    selectedGenre,
  ]);
};
export default useGames;
