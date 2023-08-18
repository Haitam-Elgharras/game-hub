import { Box, Grid, Image } from "@chakra-ui/react";
import useGameScreenshots from "../hooks/useGameScreenshots";

interface Props {
  slug: string;
}
const GameScreenshots = ({ slug }: Props) => {
  const { data: screens, isLoading, error } = useGameScreenshots(slug);

  if (isLoading) return null;
  if (error || !screens?.results) throw error;

  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
      }}
      gap={6}
    >
      {screens.results.map((screenshot) => (
        <Box>
          <Image
            key={screenshot.id}
            src={screenshot.image}
            alt="screenshot"
            borderRadius={5}
            opacity={0.85}
            shadow={"xl"}
            _hover={{
              transform: "scale(1.04)",
              transition: "transform 0.15s ease-in",
              opacity: 1,
            }}
          />
        </Box>
      ))}
    </Grid>
  );
};

export default GameScreenshots;
