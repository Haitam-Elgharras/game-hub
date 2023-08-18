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
          <Image key={screenshot.id} src={screenshot.image} alt="screenshot" />
        </Box>
      ))}
    </Grid>
  );
};

export default GameScreenshots;
