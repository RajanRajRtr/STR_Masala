# Job Service

This is a microservice for creating, listing and updating the jobs. JWT is used for authorization and authentication.

## API Reference

```http
  https://changeartwork.com/v1/api/job/spec
```

## Development

Install job-service with npm in local

```bash
  git clone https://github.com/changeartwork/job-service.git
  cd job-service
  npm install
  npm start
  Run the APIs using postman collection or using swagger
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file and mongodb installed

`APP_PORT=5003` \
`MONGO_SERVER=mongodb://0.0.0.0` \
`MONGO_PORT=27017` \
`MONGO_DB=changeartworkdb` \
`AWS_ACCESS_KEY_ID= <get_from_team>` \
`AWS_SECRET_ACCESS_KEY= <get_from_team>` \
`AWS_REGION=us-west-2` \
`AWS_BUCKET_NAME=changeartwork-files` \
`TOKEN_KEY= <get_from_team>`

## Deployment

To deploy this microservice in AWS

- Open putty and login with SSH and secret key
- Direct to job-service

```bash
    cd /code/job-service
```

- Pull the latest code

```bash
    git pull <branch-name>
```

- Restart the service with PM2

```bash
    pm2 restart job-service
```
