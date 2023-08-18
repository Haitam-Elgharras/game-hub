import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { FetchResponse } from "../services/api-client";
import { useGameQueryStore } from "./store";
import Game from "../entities/Game";

const apiClient = new APIClient<Game>(`/games`);

const useGames = () => {
  const { gameQuery } = useGameQueryStore();
  const { genreId, platformId, selectedOrder, searchText } = gameQuery;

  //the fetchresponse type will be a generic inside the pages we recieve from infinite query
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: genreId || undefined,
          platforms_parent: platformId,
          ordering: selectedOrder,
          search: searchText,

          //for pagination and it's depend on the API
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },

    staleTime: ms("24h"),
  });
};
export default useGames;
