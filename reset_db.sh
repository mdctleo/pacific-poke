#!/bin/sh
set -euo pipefail

mysql -h 127.0.0.1 --user root --password=root pacificpoke < sql/drop_tables.sql
mysql -h 127.0.0.1 --user root --password=root pacificpoke < sql/create_tables.sql
mysql -h 127.0.0.1 --user root --password=root pacificpoke < sql/Types.sql
mysql -h 127.0.0.1 --user root --password=root pacificpoke < sql/Moves.sql
mysql -h 127.0.0.1 --user root --password=root pacificpoke < sql/Pokemon.sql
mysql -h 127.0.0.1 --user root --password=root pacificpoke < sql/PokemonEvolvesTo.sql
mysql -h 127.0.0.1 --user root --password=root pacificpoke < sql/PokemonHasMoves.sql
mysql -h 127.0.0.1 --user root --password=root pacificpoke < sql/Items.sql
mysql -h 127.0.0.1 --user root --password=root pacificpoke < sql/Stone.sql
mysql -h 127.0.0.1 --user root --password=root pacificpoke < sql/Locations.sql
mysql -h 127.0.0.1 --user root --password=root pacificpoke < sql/Buildings.sql
mysql -h 127.0.0.1 --user root --password=root pacificpoke < sql/Gyms.sql
mysql -h 127.0.0.1 --user root --password=root pacificpoke < sql/Pokemart.sql
mysql -h 127.0.0.1 --user root --password=root pacificpoke < sql/StoneEvolutions.sql
