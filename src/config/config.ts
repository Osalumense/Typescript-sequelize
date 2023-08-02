import config from "./AppConfig"

const DbConfig = {
  "development": {
    "username": config.DB_USER,
    "password": config.DB_PASSWORD,
    "database": config.DB_NAME,
    "host": config.DB_HOST,
    "port": config.DB_PORT,
    "dialect": "mysql",
    logging: false,
    // pool: {
    //   max: 1,
    //   min: 0,
    //   acquire: 30000,
    //   idle: 10000,
    // },
        define: {
      freezeTableName: true
    },
  },
  "test": {
    "username": config.DB_USER,
    "password": config.DB_PASSWORD,
    "database": config.DB_NAME,
    "host": config.DB_HOST,
    "dialect": "mysql",
    logging: false,
    // pool: {
    //   max: 1,
    //   min: 0,
    //   acquire: 30000,
    //   idle: 10000,
    // },
        define: {
      freezeTableName: true
    }
  },
  "production": {
    "username": config.DB_USER,
    "password": config.DB_PASSWORD,
    "database": config.DB_NAME,
    "host": config.DB_HOST,
    "dialect": "mysql",
    logging: false,
    // pool: {
    //   max: 1,
    //   min: 0,
    //   acquire: 30000,
    //   idle: 10000,
    // },
        define: {
      freezeTableName: true
    }
  }
}

export = Object.freeze(DbConfig)
