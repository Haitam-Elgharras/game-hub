import useData from "./useData";

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
}

const useGames = (
  selectedGenre: number | null,
  selectedPlatform?: number | null
) => {
  selectedGenre = selectedGenre !== -1 ? selectedGenre : null;
  return useData<Game>(
    "/games",
    { params: { genres: selectedGenre, platforms: selectedPlatform } },
    [selectedGenre, selectedPlatform]
  );
};
export default useGames;
