import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";

const GenreList = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <List>
      {skeletons.map((skeleton) => (
        <ListItem key={skeleton} paddingY="5px">
          <HStack>
            <Skeleton borderRadius={8} boxSize="32px" />
            <SkeletonText noOfLines={1} width="80px" />
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
