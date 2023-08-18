import { Box, GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameScreenshots from "../components/GameScreenshots";
import Gametrailer from "../components/Gametrailer";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  // var! means this var will never be undefined
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <Box padding={5}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3} marginBottom={2}>
        <GridItem>
          <Heading>{game.name} </Heading>
          <ExpandableText text={game.description_raw} />
          <GameAttributes game={game} />
        </GridItem>
        <GridItem>
          <Gametrailer slug={game.slug} />
        </GridItem>
      </SimpleGrid>
      <GameScreenshots slug={game.slug} />
    </Box>
  );
};

export default GameDetailPage;
