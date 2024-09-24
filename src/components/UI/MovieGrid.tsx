import { SimpleGrid } from "@chakra-ui/react";
import MovieCard from "../MovieCard";

const MovieGrid = () => {
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      padding="10px"
      spacing={6}
    >
      <MovieCard></MovieCard>
      <MovieCard></MovieCard>
      <MovieCard></MovieCard>
      <MovieCard></MovieCard>
      <MovieCard></MovieCard>
      <MovieCard></MovieCard>
    </SimpleGrid>
  );
};

export default MovieGrid;
