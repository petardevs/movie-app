import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <form>
      <InputGroup minWidth={"500px"}>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={8}
          placeholder="Search movies and shows..."
          variant="filled"
          focusBorderColor={"#ff000081"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
