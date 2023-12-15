docker build --no-cache -f SQL\Dockerfile.PostgreSql -t probka/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t probka/app ../..
