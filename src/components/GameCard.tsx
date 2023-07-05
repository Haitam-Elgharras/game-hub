import { Card, CardBody, Flex, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import Emoji from "./Emoji";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

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
          <Heading fontSize={"2xl"}>{game.name} </Heading>
          <Emoji rating={game.rating_top} />
        </Flex>
      </CardBody>
    </Card>
  );
};
export default GameCard;
