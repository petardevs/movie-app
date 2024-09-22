import { Grid, GridItem, Show, Flex, Box } from "@chakra-ui/react";
import Navbar from "./components/UI/Navbar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}></GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={2}>
            <Flex gap={5} marginBottom={5}></Flex>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
