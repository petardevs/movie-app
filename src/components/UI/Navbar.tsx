import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  Heading,
  Image,
} from "@chakra-ui/react";
import logo from "../../assets/brand/logo.png";
import SearchInput from "../SearchInput";
import {
  BsFillGearFill,
  BsFillHeartFill,
  BsFillInfoCircleFill,
} from "react-icons/bs";

const Navbar = () => {
  return (
    <HStack
      padding="10px"
      borderBottom={"1px solid #ffffff20"}
      justifyContent={"space-between"}
    >
      <Box display={"flex"} alignItems={"center"} gap={"10px"} width={"215px"}>
        <Image src={logo} boxSize="60px" />
        <Heading fontSize={22}>Popcorn Time</Heading>
      </Box>
      <SearchInput />
      <Box width={"215px"} display={"flex"} justifyContent={"flex-end"}>
        <ButtonGroup gap="1">
          <Button colorScheme="gray">
            <BsFillHeartFill></BsFillHeartFill>
          </Button>
          <Button colorScheme="gray">
            <BsFillGearFill></BsFillGearFill>
          </Button>
          <Button colorScheme="gray">
            <BsFillInfoCircleFill></BsFillInfoCircleFill>
          </Button>
        </ButtonGroup>
      </Box>
    </HStack>
  );
};

export default Navbar;
