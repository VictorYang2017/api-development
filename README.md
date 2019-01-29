# API Development - Data Persistence
To learn more about this project and all its branches, switch to the [master branch](https://github.com/richjava/api-development):
````
git checkout master
````
## Intro to this branch: Data persistence with MongoDB and Mongoose
This branch is an example API project including routes and models with simple CRUD functionality. Data is persisted to a MongoDB database hosted on mLab. Mongoose is used for object data modelling. There is just one entity: Articles.
The project is also available on [Glitch](https://glitch.com/edit/#!/api-data-persistence?path=README.md:1:0)
Example endpoint for getting all Articles: [https://api-data-persistence.glitch.me/api/articles](https://api-data-persistence.glitch.me/api/articles)
## Setup
### 1. Installation
First, install the dependencies:
````
npm install
````
### 2. mLab
Create a free mLab account and create a database with one table called "articles". Copy the database connection URL and put it in this project's .env file as the value of the MONGODB_URI key.

> NOTE: To populate the database with articles, use [Postman](https://www.getpostman.com/), or similar, to send a POST request to the API (see the "POST request" section below for how to do this)
![mLab](https://raw.githubusercontent.com/richjava/api-development/data-persistence/assets/images/f8853aa3-f2d6-40d9-b298-b8a4592fc746_mlab-articles.png "mLab")
### 3. Environment variables
In the .env file, add your mLab (or other MongoDB cloud database provider) connection URL:
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