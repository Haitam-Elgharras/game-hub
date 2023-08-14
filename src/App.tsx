import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import CustomizedPalette from "./components/PalettesList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

//undefined : absence of a value
// null: the intentional absence of a value

export interface GameQuery {
  genreId: number | undefined;
  platformId: number | undefined;
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
            onGenreClick={(genre) => {
              setGameQuery({ ...gameQuery, genreId: genre.id });
            }}
            genreId={gameQuery.genreId}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box marginLeft={9} marginTop={2}>
          <GameHeading
            genreId={gameQuery.genreId}
            platformId={gameQuery.platformId}
          />
          <HStack marginTop={4}>
            <PlatformSelector
              onSelectPlatform={({ id: platformId }) => {
                setGameQuery({ ...gameQuery, platformId });
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
