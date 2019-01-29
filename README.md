# API Development - Relationships
To learn more about this project and all its branches, switch to the [master branch](https://github.com/richjava/api-development):
````
git checkout master
````
## Intro to this branch: Object relationships with MongoDB and Mongoose
This branch is an example project that shows how to implement API functionality for multiple objects/entities.


## Setup
### 1. Installation
First, install the dependencies:
````
npm install
````
### 2. mLab
Create a free mLab account and create a database with one table called "articles". Copy the database connection URL for use in Step 3.

> NOTE: To populate the database with articles, use [Postman](https://www.getpostman.com/), or similar, 
> to send a POST request to the API (see the "POST request" section below for how to do this)

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

## API Endpoints
This API exposes the following endpoints. 
> NOTE: Using [Postman](https://www.getpostman.com/) is a convenient way of sending requests to the API, especially when data needs to be sent in the request.

## Get all articles
GET /api/articles
![get request](https://raw.githubusercontent.com/richjava/api-development/data-persistence/assets/images/f8853aa3-f2d6-40d9-b298-b8a4592fc746_get-articles-postman.png "GET Request")

## Get an article
GET /api/articles/:articleId

## Add an article
An Article will have the following fields:
````
_id: String, (unique identifier - this will be send back in response as "id")
title: String,
description: String,
body: String,
createdAt: Date,
updatedAt: Date
````
The _id, createdAt and updatedAt fields will be automatically generated on creation of the article, so you will just need to provide the title, description and body fields as request parameters:

POST /api/articles
![post request](https://raw.githubusercontent.com/richjava/api-development/data-persistence/assets/images/f8853aa3-f2d6-40d9-b298-b8a4592fc746_post-article-postman.png "POST Request")

## Update an article
PUT /api/articles/:articleId
![put request](https://raw.githubusercontent.com/richjava/api-development/data-persistence/assets/images/f8853aa3-f2d6-40d9-b298-b8a4592fc746_put-articles-postman.png "PUT Request")

## Remove an article
DELETE /api/articles/:articleId
![delete request](https://raw.githubusercontent.com/richjava/api-development/data-persistence/assets/images/f8853aa3-f2d6-40d9-b298-b8a4592fc746_delete-article-postman.png "DELETE Request")

### Resources
You can find a more in-depth example of a Node.js/Express API at [https://github.com/gothinkster/node-express-realworld-example-app](https://github.com/gothinkster/node-express-realworld-example-app)