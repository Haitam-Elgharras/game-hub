import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import { Genre } from "../entities/Genre";
import CriticScore from "./CriticScore";
import Definitionitem from "./Definitionitem";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <Definitionitem term="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </Definitionitem>

      <Definitionitem term="Metascore">
        <CriticScore score={game.metacritic} />
      </Definitionitem>

      <Definitionitem term="Genres">
        {game.genres.map((genre: Genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </Definitionitem>

      <Definitionitem term="Publishers">
        {game.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </Definitionitem>
    </SimpleGrid>
  );
};

export default GameAttributes;
