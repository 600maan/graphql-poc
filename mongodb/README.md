# Setup MongoDb Locally

## Build MongoDB image and run container
To build the MongoDB Docker image and run the container, run the following command in the root directory of your project:

```sh
    podman compose up -d
```

## Restore MongoDB Data ( sample_mflix )

```shell
    mongorestore --uri="mongodb://root:example@localhost:27017" --drop "C:\Users\hello\Documents\Workspace\Learning\GraphQL\graphql-poc\mongodb"

```

### Create User ( MongoDB Shell)

```shell
      use sample_mflix
      db.createUser({
        user: "root",
        pwd: "example",
        roles: [{ role: "readWrite", db: "sample_mflix" }]
      })

```