#!/bin/sh
set -euo pipefail

mysql -h 127.0.0.1 --user root --password=root pacificpoke < sql/drop_tables.sql
mysql -h 127.0.0.1 --user root --password=root pacificpoke < sql/create_tables.sql
mysql -h 127.0.0.1 --user root --password=root pacificpoke < sql/Types.sql
mysql -h 127.0.0.1 --user root --password=root pacificpoke < sql/Moves.sql
mysql -h 127.0.0.1 --user root --password=root pacificpoke < sql/Pokemon.sql
