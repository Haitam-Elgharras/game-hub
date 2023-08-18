import { Box, Image } from "@chakra-ui/react";
import { useState } from "react";
import noVideo from "../assets/notrailer.png";
import useTrailer from "../hooks/useTrailer";
import { useTrailerStore } from "../hooks/store";

interface Props {
  slug: string;
}

const Gametrailer = ({ slug }: Props) => {
  const setHasTrailer = useTrailerStore((s) => s.setHasTrailer);

  const { data: trailer, error, isLoading } = useTrailer(slug);
  const firstTrailer = trailer?.results[0];

  if (isLoading) return null;
  if (error || !trailer) throw error;
  if (!firstTrailer) {
    setHasTrailer(false);
    return null;
  }
  setHasTrailer(true);

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
