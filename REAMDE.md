# TypeScript X NodeJS X Sequelize x sequelize-auto-migrations-v2

    TypeScript and NodeJS app setup with Sequelize and sequelize-auto-migrations-v2 for migrations

## To setup the application
- Copy the content of .env-example to .env
- Run `yarn install` to install all dependencies

## Adding models
- Create a new model or update an existing model

## Creating migrations
- Run `yarn db:makemigration` to automatically generate migrations based on the new changes in the models
- The migrations can be found in the /src/database/migrations directory
- Run `yarn build` to build the project 
- cd into the generated /dist directory
- run `npx sequelize db:migrate` to run pending migrations