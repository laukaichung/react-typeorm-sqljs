import "reflect-metadata";
import { DataSource } from "typeorm";
import { Movie } from "../entity/movie";

export const AppDataSource = new DataSource({
  type: "sqljs",
  autoSave: true,
  entities: [Movie],
  location: "db",
  logging: ["query", "schema"],
  synchronize: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized.");
  })
  .catch((err) => {
    console.error("Data Source initialization Error", err);
  });
