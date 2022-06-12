#!/bin/bash

docker-compose up -d

sleep 3

docker exec mongo mongo --eval "rs.initiate({_id: 'rs0', members: [{_id: 0, host: 'localhost:27017'}]});"
