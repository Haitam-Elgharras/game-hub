import { GameQuery } from "../App";
import useData from "./useData";

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

const useGames = (gameQuery: GameQuery) => {
  let { selectedGenreId, selectedPlatform, selectedOrder, searchText } =
    gameQuery;
  selectedGenreId = selectedGenreId !== -1 ? selectedGenreId : null;
  return useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenreId,
        platforms: selectedPlatform?.id,
        ordering: selectedOrder,
        search: searchText,
      },
    },
    [gameQuery]
  );
};
export default useGames;
