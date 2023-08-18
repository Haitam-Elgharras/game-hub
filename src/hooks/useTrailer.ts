import { useQuery } from "@tanstack/react-query";
import { Trailer } from "../entities/Trailer";
import APIClient from "../services/api-client";

const useTrailer = (slug: string) => {
  const apiClient = new APIClient<Trailer>("/games/" + slug + "/movies");

  return useQuery({
    queryKey: ["trailers", slug],
    queryFn: apiClient.getAll,
  });
};

export default useTrailer;
