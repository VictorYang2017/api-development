# API Development
To learn more about this project and all its branches, switch to the master branch:
````
git checkout master
````

## This branch: Data persistence with MongoDB and Mongoose (branch name = "data-persistence")

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
Create a free mLab account and create a database with one table called "articles".

An Article will have the following fields:
````
_id: String, (unique identifier - this will be send back in response as "id")
title: String,
description: String,
body: String,
createdAt: Date,
updatedAt: Date
````
> NOTE: To populate the database with articles, use [Postman](https://www.getpostman.com/), or similar, to send a POST request to the API (see the "POST request" section below for how to do this)

![mLab](assets/images/f8853aa3-f2d6-40d9-b298-b8a4592fc746%2Fmlab-articles.PNG?1544760660415 "mLab")

### 3. Environment variables
In the .env file, add your mLab (or other MongoDB cloud database provider) connection URL:

````
MONGODB_URI=<YOUR_CONNECTION_URL>
````

# API Endpoints
This API exposes the following endpoints. 

> NOTE: Using [Postman](https://www.getpostman.com/) is a convenient way of sending requests to the API, especially when data needs to be sent in the request.

## Get all articles
GET /api/articles
![get request](assets/images/f8853aa3-f2d6-40d9-b298-b8a4592fc746%2Fget-articles-postman.PNG?1544760397893 "GET Request")

## Add an article
POST /api/articles
![post request](assets/images/f8853aa3-f2d6-40d9-b298-b8a4592fc746%2Fpost-article-postman.PNG?1544760447450 "POST Request")

## Update an article
PUT /api/articles/:articleId
![put request](assets/images/f8853aa3-f2d6-40d9-b298-b8a4592fc746%2Fput-articles-postman.PNG?1544764893789 "PUT Request")

## Remove an article
DELETE /api/articles/:articleId
![delete request](assets/images/f8853aa3-f2d6-40d9-b298-b8a4592fc746%2Fdelete-article-postman.PNG?1544765268704 "DELETE Request")

Learn more [https://github.com/gothinkster/node-express-realworld-example-app](here)
