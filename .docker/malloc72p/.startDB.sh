#!/bin/bash

docker-compose exec mongo mongo --eval "rs.initiate({_id: 'rs0', members: [{_id: 0, host: 'localhost:27017'}]});"
#
#docker-compose up -d
#
#sleep 5
#
#docker exec mongo1 /scripts/rs-init.sh