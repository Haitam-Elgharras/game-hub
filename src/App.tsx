import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
  selectedGenreId: number | null;
  selectedPlatform: Platform | null;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  /*const [selectedGenre, setselectedGenre] = useState(-1);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );*/

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
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5} paddingTop={5}>
          <GenreList
            onGenreClick={(selectedGenreId: number) =>
              setGameQuery({ ...gameQuery, selectedGenreId })
            }
            selectedGenreId={gameQuery.selectedGenreId}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector
          onSelectPlatform={(selectedPlatform: Platform) =>
            setGameQuery({ ...gameQuery, selectedPlatform })
          }
        />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
