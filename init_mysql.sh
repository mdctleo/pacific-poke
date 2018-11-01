#!/bin/sh
set -euo pipefail

DATA_DIR="$PWD/dbdata"

mkdir -p $DATA_DIR
docker run -d --name ppdb -p 3306:3306 -v $DATA_DIR:/var/lib/mysql \
    -e MYSQL_ROOT_PASSWORD=root \
    -e MYSQL_DATABASE=pacificpoke \
    mysql

while ! mysqladmin ping --user=root --password=root -h 127.0.0.1 -s; do
    sleep 1
done

mysql -h 127.0.0.1 --user root --password=root pacificpoke < create_tables.sql
