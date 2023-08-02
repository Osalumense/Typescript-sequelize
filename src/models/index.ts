"use strict";
import { QueryTypes, Sequelize } from "sequelize";
import config from "../config/config";
import AppConfig from "../config/AppConfig";
import { UserFactory } from "./User";

import { ModelStatic, isAssociatable } from "../types/SequelizeTypes";

// @ts-ignore
const database = config[AppConfig.NODE_ENV] || config.development;
const sequelize = new Sequelize(database.database, database.username, database.password, {
  ...database,
  logging: false,
  dialect: database.dialect,
});


export const User = UserFactory(sequelize);

const models = {
  User,
};

export type ModelRegistry = typeof models;
export type ModelRegistryKeys = keyof typeof models;

Object.values(models).forEach((model: ModelStatic<any>) => {
  if (isAssociatable<ModelRegistry>(model)) {
    model.associate(models);
  }
});

(async () => {
  //   await sequelize.sync({ force: true });
})();

export default sequelize;
