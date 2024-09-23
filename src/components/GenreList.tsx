import { useState } from "react";
import { Button, List, ListItem } from "@chakra-ui/react";
import genres from "../data/genres.json";

const GenreList = () => {
  const [selectedGenreId, setSelectedGenreId] = useState(0);

  return (
    <List>
      {genres.map((genre) => (
        <ListItem
          key={genre.id}
          onClick={() => setSelectedGenreId(genre.id)}
          bg={selectedGenreId === genre.id ? "#ff000030" : "transparent"}
          color={selectedGenreId === genre.id ? "white" : "black"}
          borderLeft={
            selectedGenreId === genre.id
              ? "4px solid #ff000081"
              : "4px solid transparent"
          }
          padding={"4px"}
          paddingLeft={"10px"}
          borderRadius={4}
        >
          <Button
            variant={"link"}
            textAlign={"left"}
            _hover={{ color: "#ff0000" }}
          >
            {genre.name}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
