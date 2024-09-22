import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/brand/logo.png";

const Navbar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
    </HStack>
  );
};

export default Navbar;
