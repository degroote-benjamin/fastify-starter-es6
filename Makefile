include .env

init:
	docker-compose pull
	make app-init

start up:
	make app-start

app-init:
	docker-compose run --rm node npm install

app-start:
	docker-compose up -d