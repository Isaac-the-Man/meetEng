# MeetEng
Prospective RPI students and freshmen meeting seniors of the same major.

## Running
To start docker in development mode (with hot reload):
```
docker-compose -f docker-compose.dev.yml up -d
```
The frontend, backend, and database are exposed on port `8080`, `3000`, and `27017` respectively.

## Deployment
To deploy in production mode:
```
docker-compose -d up
```
The deployed port is currently `7655` for both the frontend and backend. Database is not visible to the outside.
