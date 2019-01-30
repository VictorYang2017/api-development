# API Development - Relationships between entities
This branch leads on from the branch [data-persistence](https://github.com/richjava/api-development/tree/data-persistence).

To learn more about the API Development project and all its branches, switch to the [master branch](https://github.com/richjava/api-development):
````
git checkout master
````

## Intro to this branch: Relationships between entities
An example project to demonstrate how to implement relationships between entities in an API using Node.js, Express, MongoDB and Mongoose.

There are two entities: 
* Articles
* Users

A one-to-many relationship exists between Users and Articles (a User can have many Articles but an Article can belong to only one User).

Authentication and authorisation has purposefully been omitted to keep it simple.

The project includes cleanup-after-delete functionality of both Articles and Users, so when a User is removed, all of the User's Articles are removed too. Similarly, when an Article is removed, the reference is removed from the User's list of Articles.

### Glitch.com
A working example of the project is available on [Glitch](https://glitch.com/edit/#!/api-entity-relationships?path=README.md:16:252)

Example endpoint for getting all Articles that belong to a particular user: [https://api-entity-relationships.glitch.me/api/users/5c50c63b75515d00c5ebee42/articles](https://api-entity-relationships.glitch.me/api/users/5c50c63b75515d00c5ebee42/articles)

## Setup
### 1. Installation
First, install the dependencies:
````
npm install
````
### 2. mLab
Create a free mLab account and create a database. Copy the database connection URL for use in Step 3.

> NOTE: To populate the database with articles, use [Postman](https://www.getpostman.com/), or similar, 
> to send a POST request to the API (see the "API Endpoints" section below for how to do this).

![mLab](https://raw.githubusercontent.com/richjava/api-development/data-persistence/assets/images/f8853aa3-f2d6-40d9-b298-b8a4592fc746_mlab-articles.png "mLab")

### 3. Environment variables
Create a file named .env in the root of the project. Paste in the following:
````
# Environment Config

# store your secrets and config variables in here

# referenced in server.js with process.env.MONGODB_URI

MONGODB_URI=

# note: .env is a shell file so there can't be spaces around =
````

In the .env file, paste in your mLab (or other MongoDB cloud database provider) connection URL:
````
MONGODB_URI=<YOUR_CONNECTION_URL>
````
## Running the project
To run the project locally, run:
````
npm run dev
````
If you want to run the project on a remote server, [Zeit Now](https://zeit.co/now) is a good choice for quick prototyping. Once you have the Zeit Now CLI on your machine, navigate to your project and run:
````
now --dotenv
````
As simple as that!

# API Endpoints
This API exposes the following endpoints. 

> NOTE: Using [Postman](https://www.getpostman.com/) is a convenient way of sending requests to the API, especially when data needs to be sent in the request. 

> You can import the two JSON files in this project into Postman to get started quickly.

## Articles

### Get a all articles
GET /api/articles
![get request](https://raw.githubusercontent.com/richjava/api-development/relationships/assets/images/get-all-articles.PNG "GET Request")

### Get a user's articles
GET /api/users/:userId/articles
![get request](https://raw.githubusercontent.com/richjava/api-development/relationships/assets/images/get-articles.PNG "GET Request")

### Get an article
GET /api/articles/:articleId
![get request](https://raw.githubusercontent.com/richjava/api-development/relationships/assets/images/get-article2.PNG "GET Request")

### Add an article
POST /api/users/:userId/articles
![post request](https://raw.githubusercontent.com/richjava/api-development/relationships/assets/images/add-article.PNG "POST Request")

### Update an article
PUT /api/articles/:articleId
![put request](https://raw.githubusercontent.com/richjava/api-development/relationships/assets/images/update-article2.PNG "PUT Request")

### Remove an article
DELETE /api/articles/:articleId
![delete request](https://raw.githubusercontent.com/richjava/api-development/relationships/assets/images/delete-article2.PNG "DELETE Request")

## Users

### Get all users
GET /api/users
![get request](https://raw.githubusercontent.com/richjava/api-development/relationships/assets/images/get-users.PNG "GET Request")

### Get a user
GET /api/users/:userId
![get request](https://raw.githubusercontent.com/richjava/api-development/relationships/assets/images/get-user.PNG "GET Request")

### Add a user
POST /api/users
![post request](https://raw.githubusercontent.com/richjava/api-development/relationships/assets/images/add-user.PNG "POST Request")

### Update a user
PUT /api/users/:userId
![put request](https://raw.githubusercontent.com/richjava/api-development/relationships/assets/images/update-user.PNG "PUT Request")

### Remove a user
DELETE /api/users/:userId
![delete request](https://raw.githubusercontent.com/richjava/api-development/relationships/assets/images/delete-user.PNG "DELETE Request")

### Resources

You can find a more in-depth example of a Node.js/Express API at [https://github.com/gothinkster/node-express-realworld-example-app](https://github.com/gothinkster/node-express-realworld-example-app)