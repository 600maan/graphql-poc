## Project Overview

This project is a Proof of Concept (POC) for implementing GraphQL using Java, Spring Boot, and MongoDB. It demonstrates how to set up a GraphQL server, define schemas, and perform queries and mutations.

### Project Structure
- `src/main/java/com/graphqljava/poc/model`: Contains the data models.
- `src/main/java/com/graphqljava/poc/repository`: Contains the repository interfaces.
- `src/main/java/com/graphqljava/poc/controller`: Contains the GraphQL controllers.
- `src/main/resources`: Contains the application configuration files.

## Technologies Used

- Java 17
- Spring Boot 3.3.5
- GraphQL
- MongoDB
- Maven

## Getting Started

### Prerequisites

- Java 17
- Maven
- MongoDB Atlas account \(`sample_mflix` database\)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/graphql-poc.git
   cd graphql-poc/java
    ```
   2. Set up environment variables in application properties file.
   ```
    spring.application.name=graphqljava-pocserver.port=3000
    spring.graphql.graphiql.enabled=true
    spring.data.mongodb.uri=mongodb://root:example@mongodbpoc:27017/sample_mflix?retryWrites=true&w=majority&appName=graphql-poc
    logging.level.org.springframework.data.mongodb.core.MongoTemplate=DEBUG
    logging.level.org.springframework.data.mongodb.core.MongoOperations=DEBUG
      ```
   
3. Install dependencies and build the project:  
    ````sh
    ./mvnw clean install    
    ````
4. Run the project:
   ```sh
   ./mvnw spring-boot:run
   ```


## Building the Docker Image
To build the Docker image for your application, run the following command in the root directory of your project:

```sh
    podman build -t graphql-poc-java .
```

## Running the Docker Container
To run the Docker container for your application, use the following command:

```sh
      podman run -d --name graphql-poc-java-container -p 3000:3000 graphql-poc-java
```
- --cpus=2 limits the container to use at most 2 CPU cores.
- --memory=512m limits the container to use at most 512 MB of memory.
```sh
      podman run -d --name graphql-poc-java-container --network mynetwork -p 3000:3000 --cpus=3 --memory=1g graphql-poc-java
```

4. Open a browser and navigate to [http://localhost:3000/graphiql](http://localhost:3000/graphiql) to access the GraphiQL interface.

## Usage

The GraphiQL interface allows you to interact with the GraphQL server. You can perform queries and mutations to retrieve and manipulate data.

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
