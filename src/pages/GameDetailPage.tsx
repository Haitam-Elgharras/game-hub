import { Heading, Text } from "@chakra-ui/react";
import useGameDetail from "../hooks/useGameDetail";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const params = useParams<{ id: string }>();
  const {
    data: gameDetail,
    error,
    isLoading,
  } = useGameDetail(+(params.id || "0"));

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {gameDetail && (
        <div>
          <Heading>{gameDetail.name}</Heading>
          <Text>{gameDetail.description_raw}</Text>
        </div>
      )}
    </>
  );
};

export default GameDetailPage;
