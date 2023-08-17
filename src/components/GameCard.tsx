import { Card, CardBody, Flex, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card height="100%" overflow={"hidden"}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={2}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Flex justifyContent={"space-between"}>
          <Heading fontSize={"2xl"}>
            <Link to={`/games/${game.id}`}>{game.name}</Link>
          </Heading>
          <Emoji rating={game.rating_top} />
        </Flex>
      </CardBody>
    </Card>
  );
};
export default GameCard;
