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
  let { selectedGenre, selectedPlatform, selectedOrder, searchText } =
    gameQuery;

  //the fetchresponse type will be a generic inside the pages we recieve from infinite query
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: selectedGenre?.id,
          platforms: selectedPlatform?.id,
          ordering: selectedOrder,
          search: searchText,

          //for pagination and it's depend on the API
          page: pageParam,
        },
      }),
    // will be returned automatically to the queryFn
    getNextPageParam: (lastPage, allPages) => {
      //1->2
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};
export default useGames;
