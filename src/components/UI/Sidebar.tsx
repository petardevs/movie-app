import { Box } from "@chakra-ui/react";
import GenreList from "../GenreList";

const Sidebar = () => {
  return (
    <Box borderRight={"1px solid #ffffff20"} padding={2}>
      <GenreList></GenreList>
    </Box>
  );
};

export default Sidebar;
