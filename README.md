To run:

* Create an account on [Docker Hub](https://hub.docker.com/) (you need this to pull the base node image)
* Install [Docker for Mac](https://www.docker.com/docker-mac) (or whatever your platform is)
* If you're on some weird platform, install [docker-compose](https://docs.docker.com/compose/install/)
* Clone repo
* In repo, docker-compose up -d

Now you will have built and run the chat container. You can navigate to the front-end by going to http://localhost:9123/client.html. The server is automatically watching for changes. To look at server logs, do `docker logs -f chat-app`. To inspect all containers do `docker ps -a`.
