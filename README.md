## About
An awesome react starter pack. Perfect starting point for doing any kind of React/Node project. Has just enough things to get started (you don't want to much complexity when starting but still want to be able and quickly get productive).

## Technology stack
* React with webpack for both hot reloading during dev and a compile command for deployment
* PostgreSQL with Knex and Bookshelf. Easily the most robust and best ORM combo for Node.
* Grunt for automatic creation of database
* Docker for easy infrastructure independent deployment.

## Database Initialization
IMPORTANT: ensure postgres is running before performing these steps.

If you don't have a user "postgres" with the password "postgres" you need to create one manually on your development machine. For deployment Docker creates this automagically.

After running npm install run the following:

   ```
	grunt pgcreatedb:default
   ```

### Run Migrations & Data Seeds
In terminal, from the root directory:

`knex migrate:latest --env NODE_ENV`

`knex migrate:rollback --env NODE_ENV`

`knex seed:run --env NODE_ENV`