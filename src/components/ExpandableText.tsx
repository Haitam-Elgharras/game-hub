import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { Text } from "@chakra-ui/react";
interface Props {
  text: string;
  maxLength?: number;
}

const ExpandableText = ({ text, maxLength = 300 }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (!text) return null;
  return (
    <Text>
      {expanded ? text : `${text.substring(0, maxLength)} ...`}
      <Button
        size="xs"
        colorScheme="blue"
        marginLeft={1}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Show More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
