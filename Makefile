dev: clean build run

clean:
	docker-compose stop -t0
	docker-compose rm -f

build:
	docker-compose build

run:
	docker-compose up
