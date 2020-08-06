- port is a door within an apartment building
  - address of building is the computer and the port is the door for each process

## Steps for Continuous Deployment (CD)

- Make the port dynamic
  - const port = process.env.PORT || 5000
  - reads from environment and if the environment isn't set the port is 5000
- needs a start script for Heroku to know how to start api
  - don't use nodemon to start server --> use node
- dotenv to create environment file (aka .env file)
  - gives each developer the ability to have different values for the environment variables
