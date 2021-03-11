docker build --no-cache -f SQL\Dockerfile.PostgreSql -t sample2/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t sample2/app ../..
