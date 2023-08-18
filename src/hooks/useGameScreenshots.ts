import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { GameScreenshots } from "../entities/GameScreenshots";

const useGameScreenshots = (slug: string) => {
  const apiClient = new APIClient<GameScreenshots>(
    "/games/" + slug + "/screenshots"
  );

  return useQuery({
    queryKey: ["schreenshots", slug],
    queryFn: apiClient.getAll,
  });
};

export default useGameScreenshots;
