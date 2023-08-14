import { useQuery } from "@tanstack/react-query";
import genres from "../data/genresData";
import APIClient from "../services/api-client";
// we use the useData as a generic hook to fetch because the genres and the games have the same structure

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,

    staleTime: 24 * 60 * 60 * 1000, //24 hours
    // the data that will be used before the data is fetched, and if the staleTime is expired a new request will be made
    initialData: genres,
  });

export default useGenres;
