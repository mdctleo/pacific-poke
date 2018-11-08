CREATE TABLE Pokemon(
    PID INTEGER,
    PokemonName VARCHAR(50) UNIQUE NOT NULL,
    Speed INTEGER NOT NULL,
    Sdef INTEGER NOT NULL,
    Satk INTEGER NOT NULL,
    Def INTEGER NOT NULL,
    Atk INTEGER NOT NULL,
    HP INTEGER NOT NULL,
    PRIMARY KEY (PID)
);

CREATE TABLE Types(
	TypeName VARCHAR(50),
	PRIMARY KEY (TypeName)
);

CREATE TABLE Moves(
	MoveName VARCHAR(50),
	Effect VARCHAR(500) NOT NULL,
	Category VARCHAR(50) NOT NULL,
	Power INTEGER,
	Accuracy INTEGER,
	PP INTEGER,
	TypeName VARCHAR(50) NOT NULL,
	PRIMARY KEY (MoveName),
	FOREIGN KEY (TypeName) REFERENCES Types(TypeName)
);

CREATE TABLE PokemonHasTypes(
    PID INTEGER,
    TypeName VARCHAR(50),
    PRIMARY KEY (PID, TypeName),
    FOREIGN KEY (PID) REFERENCES Pokemon(PID),
    FOREIGN KEY (TypeName) REFERENCES Types(TypeName)
);

CREATE TABLE PokemonHasMoves(
	PID INTEGER,
	MoveName VARCHAR(50),
	PRIMARY KEY (PID, MoveName),
	FOREIGN KEY (PID) REFERENCES Pokemon(PID),
	FOREIGN KEY (MoveName) REFERENCES Moves(MoveName)
);

CREATE TABLE PokemonEvolvesTo(
    EvolveToPID INTEGER,
    EvolveFromPID INTEGER NOT NULL,
    AtLevel INTEGER NOT NULL,
    PRIMARY KEY (EvolveToPID),
    FOREIGN KEY (EvolveFromPID) REFERENCES Pokemon(PID),
    FOREIGN KEY (EvolveToPID) REFERENCES Pokemon(PID)
);

CREATE TABLE Locations(
	LocationName VARCHAR(50),
	PRIMARY KEY (LocationName)
);

CREATE TABLE Encounters(
	PokemonID INTEGER,
	LocationName VARCHAR(50),
	EncounterRate INTEGER NOT NULL,
	PRIMARY KEY (PokemonID, LocationName),
	FOREIGN KEY (PokemonID) REFERENCES Pokemon(PID),
	FOREIGN KEY (LocationName) REFERENCES Locations(LocationName)
);

CREATE TABLE Buildings(
    BuildingName VARCHAR(50),
    LocationName VARCHAR(50) NOT NULL,
    PRIMARY KEY (BuildingName),
    FOREIGN KEY (LocationName) REFERENCES Locations(LocationName)
);

CREATE TABLE Gym(
    BuildingName VARCHAR(50),
    BadgeName VARCHAR(50) UNIQUE NOT NULL,
    LeaderName VARCHAR(50) UNIQUE NOT NULL,
    PRIMARY KEY (BuildingName),
    FOREIGN KEY (BuildingName) REFERENCES Buildings(BuildingName)
);

CREATE TABLE Items(
    IID INTEGER,
    ItemName VARCHAR(50) NOT NULL,
    Effect VARCHAR(500) NOT NULL,
    Cost INTEGER,
    PRIMARY KEY(IID)
);

CREATE TABLE Pokemart(
    BuildingName VARCHAR(50),
    PRIMARY KEY (BuildingName),
    FOREIGN KEY (BuildingName) REFERENCES Buildings(BuildingName)
);

CREATE TABLE PokemartSellsItems(
    IID INTEGER,
    BuildingName VARCHAR(50),
    PRIMARY KEY (IID, BuildingName),
    FOREIGN KEY (IID) REFERENCES Items(IID),
    FOREIGN KEY (BuildingName) REFERENCES Pokemart(BuildingName)
);

CREATE TABLE Stone(
    IID INTEGER,
    PRIMARY KEY (IID),
    FOREIGN KEY (IID) REFERENCES Items(IID)
);

CREATE TABLE StoneEvolutions(
	IID INTEGER,
	EvolveToPID INTEGER,
	PRIMARY KEY (IID, EvolveToPID),
	FOREIGN KEY (EvolveToPID) REFERENCES Pokemon(PID)
);
