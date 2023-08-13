import { GameQuery } from "../App";
import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

const apiClient = new APIClient<Game>(`/games`);
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
  let { selectedGenre, selectedPlatform, selectedOrder, searchText } =
    gameQuery;

  return useQuery<Game[], Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: selectedGenre?.id,
          platforms: selectedPlatform?.id,
          ordering: selectedOrder,
          search: searchText,
        },
      }),
  });
};
export default useGames;
