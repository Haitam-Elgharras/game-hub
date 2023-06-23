import { Box } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={10} overflow={"hidden"} width="300px">
      {children}
    </Box>
  );
};

export default GameCardContainer;
