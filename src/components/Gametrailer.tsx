import { Box } from "@chakra-ui/react";
import useTrailer from "../hooks/useTrailer";

interface Props {
  slug: string;
}

const Gametrailer = ({ slug }: Props) => {
  const { data: trailer, error, isLoading } = useTrailer(slug);
  const firstTrailer = trailer?.results[0];

  if (isLoading) return null;
  if (error || !trailer) throw error;
  if (!firstTrailer) {
    return null;
  }
  return (
    <Box paddingY={4}>
      <video
        controls
        poster={firstTrailer.preview || ""}
        src={firstTrailer.data[480]}
      />
    </Box>
  );
};

export default Gametrailer;
