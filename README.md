# EOS Social Network

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Built in PERN stack (PostgreSQL, Express, React, and Node)
Used PERN stack to simplify the backend allowing me to create a full stack application.

## Install PostgreSQL and clone project
Run `psql -U username -d myDataBase -a -f db-setup.sql` to create database or create database within PGAdmin

## Packages used
`dependencies": {
    "axios": "^1.4.0",
    "concurrently": "^8.2.0",
        - concurrently is used to start application and server concurrently within the same terminal and one command
    "multer": "^1.4.5-lts.1",
        - allows for media uploads
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.14.1",
    "react-scripts": "5.0.1"
  }`

Server dependencies
`dependencies": {
    "bcrypt": "^5.1.0",
        - encrypts text such as passwords
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "pg": "^8.11.1",
    "sequelize": "^6.32.1"
        - allows for data manipulation and validation
  }`

### Setting up frontend

Navigate into project and run:\
	`npm install`
Run the same command in the server folder to install server dependencies

To start app, run:\
	`npm start`

****** ****** ****** ****** ****** ****** ****** ******
Currently user can Register, Login, and make posts. The correct user_id is associated with the user in database.
****** ****** ****** ****** ****** ****** ****** ******

### TO DO
5 - With the posts, you need to implement a simple CRUD with some requirements: 
    a. Only the owner of the post can edit or delete the posts;
    b. Allow adding an image to the post;
    c. Save edits as a history;
    d. Include a view counter for the posts;
    e. Include a counter for likes and dislikes on the posts;

6 - With the comments, you need to implement a simple CRUD with some requirements:
    a. Only the owner of the comment can edit the comment;
    b. The user who made the comment can remove it;
    c. The owner of the post can also remove the comment;
    d. Add a marker to indicate if the comment was removed by the user or the owner of the post;
    e. Send an email to the owner of the post notifying them of a new comment on their post;

7 - Create a route that generates a report containing the posts with the following fields: a. Title;
    b. Number of comments; c. Number of views;
    d. Number of likes;
    e. Number of dislikes.