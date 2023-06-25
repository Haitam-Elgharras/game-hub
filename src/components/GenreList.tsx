import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface GenreListProps {
  onGenreClick: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onGenreClick, selectedGenre }: GenreListProps) => {
  const { data: genres, error, isLoading } = useGenres();

  return (
    <>
      {isLoading && <GenreListSkeleton />}
      {error && null}
      <List>
        {genres.map((genre) => {
          return (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Button
                  fontWeight={
                    selectedGenre?.id === genre.id ? "bold" : "normal"
                  }
                  variant="link"
                  fontSize="lg"
                  onClick={() => onGenreClick(genre)}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default GenreList;
