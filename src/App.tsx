import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //greater than 1024px
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="tomato">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="papayawhip">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
