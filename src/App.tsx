import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { Genre } from "./hooks/useGenres";
import GameHeading from "./components/GameHeading";
import CustomizedPalette from "./components/PalettesList";
import { Platform } from "./hooks/usePlatforms";

//undefined : absence of a value
// null: the intentional absence of a value

export interface GameQuery {
  selectedGenreId: number | undefined;
  selectedPlatformId: number | undefined;
  selectedOrder: string;
  searchText: string;
}
export interface GenreAndPlatform {
  genreName: string;
  platformName: string;
}
interface Props {
  onThemeChange: (newPalette: string) => void;
}
function App({ onThemeChange }: Props) {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const [genreAndPlatform, setGenreAndPlatform] = useState<GenreAndPlatform>(
    {} as GenreAndPlatform
  );
  const handleSelectColor = (color: string) => {
    onThemeChange(color);
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, //`"row1" "row2"`
        lg: `"nav nav" "aside main"`, //greater than 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5} paddingTop={5}>
          <GenreList
            onGenreClick={({ id: selectedGenreId, name: genreName }: Genre) => {
              setGameQuery({ ...gameQuery, selectedGenreId });
              setGenreAndPlatform({ ...genreAndPlatform, genreName });
            }}
            selectedGenreId={gameQuery.selectedGenreId}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box marginLeft={9} marginTop={2}>
          <GameHeading genreAndPlatform={genreAndPlatform} />
          <HStack marginTop={4}>
            <PlatformSelector
              onSelectPlatform={({
                id: selectedPlatformId,
                name: platformName,
              }: Platform) => {
                setGameQuery({ ...gameQuery, selectedPlatformId });
                setGenreAndPlatform({ ...genreAndPlatform, platformName });
              }}
            />
            <SortSelector
              onSelectedOrder={(order: string) =>
                setGameQuery({ ...gameQuery, selectedOrder: order })
              }
              order={gameQuery.selectedOrder}
            />
            <CustomizedPalette onSelectColor={handleSelectColor} />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
