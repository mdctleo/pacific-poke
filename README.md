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
