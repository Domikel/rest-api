# Social Media API


This is a REST API for a simple social media platform built using Express and connected to a MongoDB database. Users can register, log in, add and delete friends, create, edit, and delete posts, and add likes to posts and comments. This API can be used to build social media applications or as a reference for learning how to build REST APIs with Node.js, Express, and MongoDB.

## Prerequisites

Before running this API, you will need to have the following installed on your machine:

**Node.js v14 or later**
**npm (Node Package Manager)**
**MongoDB v4 or later**

To check if you have Node.js installed, open your terminal or command prompt and run the following command:


**node -v**

If you have Node.js installed, you should see the version number printed in your terminal. To check if you have npm installed, run the following command:


**npm -v**

If you have npm installed, you should see the version number printed in your terminal. To check if you have MongoDB installed, run the following command:



**mongod --version**

If you have MongoDB installed, you should see the version number printed in your terminal.

If any of these prerequisites are missing, please refer to the respective documentation for installation instructions.

## Installation

To install this API, clone this repository to your machine and run the following command in the project directory:

**git clone https://github.com/Domikel/rest-api.git**

Then: 

**cd rest-api**

Then install dependencies:

**npm install**

Then 
.env file and set the following environment variables

**PORT=5000**
**MONGODB=mongodb://localhost:27017/social-media-api**
**JWT_SECRET=your_jwt_secret**

Then 
Start the server:

**npm start**

The server will start running at http://localhost:3000.

You can now use a tool like Postman or curl to make requests to the API. Please refer to the Usage section for more information on the endpoints available and how to use them.

## Usage

This API has the following endpoints:

**POST /api/users/register** - Register a new user
**GET /api/users** - Displays all users in the database.
**GET /api/users/:id** - Displays a single user by ID.
**POST /api/users/login** - Logs in a user.
**DELETE /api/users/:id** - Deletes a user by ID.

*Please note that the API uses JWT authentication, so you will need to include the Authorization header with a valid token in order to access protected routes.*

**GET /api/posts** - Displays all posts in the database.
**GET /posts/getpostbyuser/:id** - Displays all posts of a single user with the given ID.
**GET /api/posts/:id** - Displays a single post by ID.
**POST /api/posts** - Creates a new post.
**PATCH /api/posts/:id** - Edits a post by ID.
**DELETE /api/posts/:id** - Deletes a post by ID.

**POST /api/likes** - Creates a new like
**DELETE /api/likes/:id** - Deletes a like by ID.
**GET /api/likes/:id** - Displays  All Likes Per Post.

**POST /api/comments** - Creates a new comment
**DELETE /api/comments/:id** - Deletes a comment by ID.

**POST /api/friends** - Creates a new friend
**DELETE /api/friends/:id** - Deletes a friend by ID.
**GET /api/friends/:id** - Displays  single friend.
**GET /api/friends/user/:id** - Displays all users friends.

## Built With

* [Node.js](https://nodejs.org/en/) - JavaScript runtime environment
* [Express](https://expressjs.com/) - Web framework for Node.js
* [MongoDB](https://www.mongodb.com/) - NoSQL database
* [Mongoose](https://mongoosejs.com/) - MongoDB object modeling for Node.js
* [JSON Web Tokens](https://jwt.io/) - JSON-based open standard for creating access tokens



## Authors
| Aleksandra | [@alexgrubor](http://github.com/alexgrubor) |
| Miguel | [@domikel](https://github.com/domikel)|
| Arber | [@arbertotraku](https://github.com/ArberTotraku)|





## License

This project is licensed under the MIT License 








