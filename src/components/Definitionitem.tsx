import { Box, Heading } from "@chakra-ui/react";
import React, { Children } from "react";

interface Props {
  term: string;
  children: React.ReactNode;
}

const Definitionitem = ({ term, children }: Props) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default Definitionitem;
