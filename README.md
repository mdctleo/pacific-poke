# Pacific Poke

Pokemon database for UBC's CPSC 304 Project.

- [ER Diagram](#er-diagram)
- [Getting Started](#getting-started)

## ER Diagram

![ER Diagram](/er-diagram.png "ER Diagram")

## Getting Started

### Setting up your local database
Developing requires a `mysql` client and `docker` to create a local database container.

On mac, install them via [Homebrew](https://brew.sh/) by running:

```sh
brew install mysql
brew cask install docker
```

Then run `./init_mysql.sh` to create the initial docker container database and populate it.

After set up, you can run `./login.sh` to connect to the database at any time. Useful for developing and debugging.

### Developing the Java code
You should be able to import this project ([Intellij](https://www.jetbrains.com/idea/) reccomended) and run the application.

Make sure your database is running: `docker ps` to check, `docker start ppdb` to start it.