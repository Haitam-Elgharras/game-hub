import { Box, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hooks/useGame";
import GameAttributes from "../components/GameAttributes";
import Gametrailer from "../components/Gametrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  // var! means this var will never be undefined
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <Box padding={5}>
      <Heading>{game.name} </Heading>
      <ExpandableText text={game.description_raw} />
      <GameAttributes game={game} />
      <Gametrailer slug={game.slug} />
      <GameScreenshots slug={game.slug} />
    </Box>
  );
};

export default GameDetailPage;
