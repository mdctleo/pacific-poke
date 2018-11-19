# Pacific Poke

Pokemon database for UBC's CPSC 304 Project.

- [ER Diagram](#er-diagram)
- [Getting Started](#getting-started)

## ER Diagram

![ER Diagram](/er-diagram.png "ER Diagram")

## Getting Started

### Setting up your local database
Developing requires `mysql`, `docker`, `docker-compose` to create a local database container.

On mac, install them via [Homebrew](https://brew.sh/) by running:

```sh
brew install mysql
brew cask install docker
# Note: You'll need to open up the Docker app Homebrew installed to set it up
```

After installing the tools, at the root of this repository, run:
```sh
# Initialize and start mysql on :3306 and phpmyadmin on :80
docker-compose up -d
```

Then once mysql is accepting connections, run:
```sh
# Resets the database tables with initial data
./reset_db.sh
```

After setting up, you can

1. visit http://localhost/ to manage your database using phpmyadmin.
1. or run `./login.sh` to connect to the database via your `mysql` client.

Here are some useful commands:
```sh
docker-compose start         # start the containers
docker-compose stop          # stop the containers
docker-compose down          # to destroy the containers
docker-compose logs --follow # tail the container logs
docker-compose ps -a         # see the status of your containers
```

### NPM Scripts

1. run `npm start`  to start the frontend on `localhost:3000` and backend on `localhost:3006`

2. run `npm test` to run tests

3. run `npm build` to build

All the above should work with `yarn` (if you have that) e.g. `yarn start`, `yarn test`, and `yarn build`.

### Backend Server Endpoints

There are a set of server end points in `PokemonRouter.ts`, they will handle requests from the frontend
and call the corresponding backend implementation for the request.

Each end point have a comment on the intended backend SQL implementation it's supposed to call.

You can test the first one `/getPokemonWithName/:name`
by inputing `127.0.0.1:3006/getPokemonWithName/squirtle` in your browser
(make sure both your server and database are started!)

