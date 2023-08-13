import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface GenreListProps {
  onGenreClick: (genre: Genre) => void;
  selectedGenreId: number | undefined;
}

const GenreList = ({ onGenreClick, selectedGenreId }: GenreListProps) => {
  const { data: genres, error, isLoading } = useGenres();

  return (
    <>
      {isLoading && <GenreListSkeleton />}
      {error && null}
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {genres?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                objectFit={"cover"}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
                variant="link"
                fontSize="lg"
                onClick={() => onGenreClick(genre)}
                whiteSpace={"break-spaces"}
                textAlign={"left"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
