import useData from "./useData";
// we use the useData as a generic hook to fetch because the genres and the games have the same structure

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
