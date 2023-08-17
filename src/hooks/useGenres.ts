import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genresData";
import APIClient from "../services/api-client";
import { Genre } from "../entities/Genre";
// we use the useData as a generic hook to fetch because the genres and the games have the same structure

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    // the data that will be used before the data is fetched, and if the staleTime is expired a new request will be made
    initialData: genres,
  });

export default useGenres;
