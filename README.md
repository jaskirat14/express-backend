# REST API BACKEND


## Getting started

### 1. Download example and install dependencies

Clone the repository :

```
git clone https://github.com/jaskirat14/express-backend.git
```

Install npm dependencies:
```
cd express-backend
npm install
Place .env file in project root
```


### 2. Create and seed the database

Run the following command to create your SQLite database file. This also creates the `User` and `Post` tables that are defined in [`prisma/schema.prisma`](./prisma/schema.prisma):

```
npx prisma migrate dev --name init
```

When `npx prisma migrate dev` is executed against a newly created database, seeding is also triggered.  The seed file in [`prisma/seed.js`](./prisma/seed.js) will be executed and your database will be populated with the sample data.
Note:
If seed is not triggered we can run it manually using:
```
node seed.js
```

### 3. Start the REST API server

```
npm run dev
```

The server is now running on `http://localhost:3000`. You can send the API requests implemented in `server.js`, e.g. [`http://localhost:3000/feed`](http://localhost:3000/feed).

## Using the REST API

You can access the REST API of the server using the following endpoints:

### `GET`

- `/post/:id`: Fetch a single post by its `id`
- `/feed?searchString={searchString}&take={take}&skip={skip}&orderBy={orderBy}`: Fetch all _published_ posts
  - Query Parameters
    - `searchString` (optional): This filters posts by `title` or `content`
    - `take` (optional): This specifies how many objects should be returned in the list
    - `skip` (optional): This specifies how many of the returned objects in the list should be skipped
    - `orderBy` (optional): The sort order for posts in either ascending or descending order. The value can either `asc` or `desc`
- `/user/:id/drafts`: Fetch user's drafts by their `id`
- `/users`: Fetch all users
### `POST`

- `/post`: Create a new post
  - Body:
    - `title: String` (required): The title of the post
    - `content: String` (optional): The content of the post
    - `authorEmail: String` (required): The email of the user that creates the post
- `/signup`: Create a new user
  - Body:
    - `email: String` (required): The email address of the user
    - `name: String` (optional): The name of the user
    - `postData: PostCreateInput[]` (optional): The posts of the user

### `PUT`

- `/publish/:id`: Toggle the publish value of a post by its `id`
- `/post/:id/views`: Increases the `viewCount` of a `Post` by one `id`

### `DELETE`

- `/post/:id`: Delete a post by its `id`


## References
- https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-node-mysql
- https://github.com/prisma/prisma-examples/tree/latest/javascript/rest-express

## Next steps
- Check out the [Prisma docs](https://www.prisma.io/docs)
