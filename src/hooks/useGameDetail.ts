import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { axiosInstance } from "../services/api-client";

export interface GameDetail {
  id: number;
  description: string;
  name: string;
  description_raw: string;
}

const useGenres = (id?: number) => {
  //fetch the game with axios

  return useQuery({
    queryKey: ["games", id],
    queryFn: () =>
      axiosInstance.get<GameDetail>(`/games/${id}`).then((res) => res.data),
    staleTime: ms("24h"),
  });
};

export default useGenres;
