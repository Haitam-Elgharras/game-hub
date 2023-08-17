import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import CustomizedPalette from "../components/PalettesList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import GenreList from "../components/GenreList";

function HomePage() {
  return (
    <Grid
      templateAreas={{
        base: `"main"`, //`"row1" "row2"`
        lg: `"aside main"`, //greater than 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5} paddingTop={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box marginLeft={9} marginTop={2}>
          <GameHeading />
          <HStack marginTop={4}>
            <PlatformSelector />
            <SortSelector />
            <CustomizedPalette />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default HomePage;
