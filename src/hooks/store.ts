import { create } from "zustand";

//undefined : absence of a value
// null: the intentional absence of a value
interface GameQuery {
  genreId?: number;
  platformId?: number;
  selectedOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSelectedOrder: (selectedOrder: string) => void;
  setSearchText: (searchText: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {} as GameQuery,

  setGenreId: (genreId: number) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),

  setPlatformId: (platformId: number) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),

  setSelectedOrder: (selectedOrder: string) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, selectedOrder } })),

  // if the user selected a wrong genre and then search we need to reset the genreId
  setSearchText: (searchText: string) =>
    set(() => ({ gameQuery: { searchText } })),
}));

// Remove the prop derilling when change the palette
interface ThemeStore {
  selectedThemeColor: string;
  setSelectedThemeColor: (selectedTheme: string) => void;
}

const useThemeStore = create<ThemeStore>((set) => ({
  selectedThemeColor:
    localStorage.getItem("selectedThemeColor") || "Dark Palette",
  setSelectedThemeColor: (selectedThemeColor: string) => {
    localStorage.setItem("selectedThemeColor", selectedThemeColor);
    set(() => ({ selectedThemeColor }));
  },
}));

// fixing the game with no trailer
interface hasTrailer {
  hasTrailer: boolean;
  setHasTrailer: (hasTrailer: boolean) => void;
}

const useTrailerStore = create<hasTrailer>((set) => ({
  hasTrailer: true,
  setHasTrailer: (hasTrailer: boolean) => set(() => ({ hasTrailer })),
}));

export { useGameQueryStore, useThemeStore, useTrailerStore };
