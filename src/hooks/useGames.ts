import { GameQuery } from "../App";
import { useInfiniteQuery } from "@tanstack/react-query";
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
  let { selectedGenreId, selectedPlatformId, selectedOrder, searchText } =
    gameQuery;

  //the fetchresponse type will be a generic inside the pages we recieve from infinite query
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: selectedGenreId || undefined,
          platforms_parent: selectedPlatformId,
          ordering: selectedOrder,
          search: searchText,

          //for pagination and it's depend on the API
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },

    staleTime: 24 * 60 * 60 * 1000, //1 day
  });
};
export default useGames;
