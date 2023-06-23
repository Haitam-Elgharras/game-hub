import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );

  {
    /* <Card borderRadius={10} overflow={"hidden"}>
<Image src={getCroppedImageUrl(game.background_image)} />
<CardBody>
  <Heading fontSize={"2xl"}>{game.name}</Heading>
  <HStack justifyContent="space-between">
    <PlatformIconList
      platforms={game.parent_platforms.map((p) => p.platform)}
    />
    <CriticScore score={game.metacritic}></CriticScore>
  </HStack>
</CardBody>
</Card> */
  }
};

export default GameCardSkeleton;
