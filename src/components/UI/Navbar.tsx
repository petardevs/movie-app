import { Box, HStack, Heading, Image } from "@chakra-ui/react";
import logo from "../../assets/brand/logo.png";
import SearchInput from "../SearchInput";

const Navbar = () => {
  return (
    <HStack
      padding="10px"
      borderBottom={"1px solid #ffffff20"}
      justifyContent={"space-between"}
    >
      <Box display={"flex"} alignItems={"center"} gap={"10px"}>
        <Image src={logo} boxSize="60px" />
        <Heading fontSize={22}>Popcorn Time</Heading>
      </Box>
      <SearchInput />
    </HStack>
  );
};

export default Navbar;
