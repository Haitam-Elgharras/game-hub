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
// import theme from "./theme";
// import PalettesData from "./data/PalettesData";

export interface GameQuery {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
  selectedOrder: string;
  searchText: string;
}
interface Props {
  onThemeChange: (newPalette: string) => void;
}
function App({ onThemeChange }: Props) {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  /*const [selectedGenre, setselectedGenre] = useState(-1);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );*/
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
            onGenreClick={(selectedGenre: Genre) =>
              setGameQuery({ ...gameQuery, selectedGenre })
            }
            selectedGenre={gameQuery.selectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box marginLeft={9} marginTop={2}>
          <GameHeading gameQuery={gameQuery} />
          <HStack marginTop={4}>
            <PlatformSelector
              onSelectPlatform={(selectedPlatform: Platform) =>
                setGameQuery({ ...gameQuery, selectedPlatform })
              }
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
