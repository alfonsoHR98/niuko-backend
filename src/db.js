import { Sequelize } from "sequelize";
import {
  DB_HOST,
  DB_PASSWORD,
  DB_USER,
  DB_NAME,
  DB_PORT,
  DB_DIALECT,
} from "./config.js";

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_DIALECT,
});
