docker build --no-cache -f SQL\Dockerfile.PostgreSql -t probka-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t probka-java/app ../../..
