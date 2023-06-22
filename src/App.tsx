import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //greater than 1024px
      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
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
