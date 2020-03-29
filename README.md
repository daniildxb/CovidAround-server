# CovidAround-server

## Installation and start-up
In order to run service as a container use docker-compose
```
$ docker-compose build
$ docker-compose up
```

To run as a standalone Node, npm and Postgres are required

```
npm i
npm start
```
Service will start websocket server on port 3000, to run on another port run

```
port=${port} npm start
```


To init db config (relations and fixtures) run
```
npm run migrate
```


## API
Service exposes websocket server which can handle several types of messages. Messages share common structure.
```
{
  userId,
  type, // string possible values - `register`|`location`|`infect`|`notifications`
  data, // object with message data
}
```

For each message sent to the server, 'ack' response will be issued.
Messages and responses are serialized as a strings.


