import React, { FunctionComponent } from "react";
import { AppDataSource } from "../config/data-source";
import { Movie } from "../entity/movie";

function getRandomInt(max = 10000 * 10000) {
  return Math.floor(Math.random() * max);
}

const HomePage: FunctionComponent = () => {
  const addMovie = async () => {
    const repo = AppDataSource.getRepository(Movie);
    const movie = new Movie();
    const randomInt = getRandomInt();
    movie.name = "Random Movie" + randomInt;
    movie.description = "Description" + randomInt;
    await repo.save(movie);
    console.log(await repo.find());
  };

  return (
    <div>
      <button onClick={addMovie}>Add a movie</button>
    </div>
  );
};

export default HomePage;
