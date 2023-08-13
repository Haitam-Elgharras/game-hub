import { Heading } from "@chakra-ui/react";
import { GenreAndPlatform } from "../App";

interface Props {
  genreAndPlatform: GenreAndPlatform;
}

const GameHeading = ({ genreAndPlatform }: Props) => {
  const heading = `${genreAndPlatform?.platformName || ""} ${
    genreAndPlatform?.genreName || ""
  } Games`;
  return <Heading as={"h1"}>{heading} </Heading>;
};
export default GameHeading;
