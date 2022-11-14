### criar package.json

`yarn init -y`

yarn add ts-node-dev --de

###

yarn typeorm migration:create -n CreateProducts

yarn typeorm migration:run

docker exec -it db-postgres

sudo docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

### Entrar no container
docker exec -it <container-id> psql -U <username> -d <database-name>
