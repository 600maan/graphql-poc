# GraphQL Node.js Project

This is a Node.js project that uses GraphQL to provide an API for querying and managing movie data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Endpoints](#endpoints)

### Prerequisites

- Node.js ( v20.17.0 )
- MongoDB Atlas account (`sample_mflix` database)
- Postman (optional)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/graphql-poc.git
   cd graphql-poc/nodejs
    ```

2. Set up environment variables: Create a `.env` file in the root directory and add your MongoDB Atlas connection string:
   ```
    NODE_PORT=4000
    MONGODB_URI=mongodb://root:example@mongodbpoc:27017/sample_mflix?retryWrites=true&w=majority&appName=graphql-poc
    ```
   
3. Install dependencies:
    ```sh
    npm install
    ```
   
4. Run the project:
    ```sh
    npm start
    ```
## Building the Docker Image
To build the Docker image for your application, run the following command in the root directory of your project:

```sh
    podman build -t graphql-poc-nodejs .
```

## Running the Docker Container
To run the Docker container for your application, use the following command:

```sh
       podman run -d --name graphql-poc-nodejs-container -p 4000:4000 graphql-poc-nodejs
```
- --cpus=2 limits the container to use at most 2 CPU cores.
- --memory=512m limits the container to use at most 512 MB of memory.
```sh
    podman run -d --name graphql-poc-nodejs-container --network mynetwork -p 4000:4000 --cpus=3 --memory=1g graphql-poc-nodejs
```

5. Open a browser and navigate to [http://localhost:4000/graphql](http://localhost:4000/graphql) to access the GraphQL Playground.
6. You can also use [Postman](https://www.postman.com/) to interact with the GraphQL server.

## Usage

The GraphQL Playground allows you to interact with the GraphQL server. You can perform queries and mutations to retrieve and manipulate data.

### Sample Queries

To fetch movies by year, use the following query:
```graphql
{
  moviesByYear(year: 2021) {
    title
    year
    genre
  }
}
```

To fetch movies within a range of years, use the following query:
```graphql
{
  moviesByYearRange(startYear: 2020, endYear: 2022) {
    title
    year
    genre
  }
}
```
