import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
function App() {
  const [selectedGenre, setSelectedGenre] = useState(-1);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  const handleSelectGenre = (genreId: number) => setSelectedGenre(genreId);
  const handleSelectPlatform = (platform: Platform) =>
    setSelectedPlatform(platform);

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
            onGenreClick={handleSelectGenre}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector onSelectPlatform={handleSelectPlatform} />
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform?.id}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
