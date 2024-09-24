import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import image from "../assets/img/pb.webp"

const MovieCard = () => {
  return (
    <Card padding={3}>
      <Image src={image} borderRadius={10}></Image>
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}></HStack>
        <Heading fontSize="2xl">Prison Break</Heading>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
