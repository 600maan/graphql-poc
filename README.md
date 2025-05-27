# GraphQL Performance Comparison: Java vs Node.js

This project aims to compare the performance of GraphQL implementations using Java (Spring Boot) and Node.js.

## Project Overview

The project includes two separate GraphQL servers:
1. Java-based server using Spring Boot.
2. Node.js-based server using Express and Apollo Server.

## Technologies Used

### Java Server
- Java 17
- Spring Boot 3.3.5

### Node.js Server
- Node.js 
- Express
- [graphql-http](https://graphql.org/graphql-js/graphql-http/)


## Performance Test Setup

The performance tests were conducted using Apache JMeter. The following configurations were used for the tests:

- **Number of Threads (Users)**: 5
- **Ramp-Up Period**: 5
- **Loop Count**: Forever ( Ran for 120 minutes )

### Test Scenarios

1. **Querying Movies by Year**:
   ```graphql
    {
      "query": "query MoviesByYear { moviesByYear(year: 1929) { count movies { id plot genres runtime cast numMflixComments poster title fullplot languages released directors writers lastupdated year countries type awards { wins nominations text } imdb { rating votes id } tomatoes { production lastUpdated viewer { rating numReviews } } } } }"
    }
2. **Querying Movies by Genre**:
    ```graphql
    {
      "query": "query MoviesByGenres($genres: [String!]!) { moviesByGenres(genres: $genres) { count movies { id plot genres runtime cast numMflixComments poster title fullplot languages released directors writers lastupdated year countries type awards { wins nominations text } imdb { rating votes id } tomatoes { production lastUpdated viewer { rating numReviews } } } } }",
      "variables": {
        "genres": ["Action"]
      }
    }
    ```
   
### Detailed Performance Test Setup

- **CPU**: 11th Gen Intel(R) Core(TM) i7-1165G7 @ 2.80GHz
- **Memory**: 32GB
- **Operating System**: Windows 11 Enterprise
- **Java Version**: OpenJDK 17
- **Node.js Version**: 20.17.0
- **Database**: MongoDB (`sample_mflix` database)


## Performance Test Results

The performance tests were conducted using Apache JMeter with the following results:

### Java Server (Spring Boot)
- **Average Response Time**: 43 ms 
- **Throughput**: 135 RPS
- **CPU Usage**: XX %
- **Memory Usage**: XXMB

### Node.js Server (Express & Apollo Server)
- **Average Response Time**: 175 ms
- **Throughput**: 50 RPS
- **CPU Usage**: XX %
- **Memory Usage**: XX MB

## Conclusion

The performance comparison between the Java and Node.js GraphQL servers shows the following:

- **Response Time**: The Java server has a lower average response time compared to the NodeJS server.
- **Throughput**: The Java server handles more requests per second than the NodeJS server.
- **CPU Usage**: The XX server uses less CPU compared to the XX server.
- **Memory Usage**: The XX server uses less memory compared to the XX server.

These results indicate that the Java server performs better in terms of response time, throughput, CPU usage, and memory usage for the given test scenarios. However, the choice between Java and Node.js should also consider other factors such as development ecosystem, team expertise, and specific project requirements.