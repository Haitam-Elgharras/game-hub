import { GameQuery } from "../App";
import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";

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
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
  let { selectedGenre, selectedPlatform, selectedOrder, searchText } =
    gameQuery;

  return useQuery<Game[], Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: selectedGenre?.id,
            parent_platforms: selectedPlatform?.id,
            ordering: selectedOrder,
            search: searchText,
          },
        })
        .then((res) => res.data.results),
  });
};
export default useGames;
