# Tube-Wise



#### Timeframe




## Are you ready to think wisely when planning your route?

[Tube Wise]()


## Technologies Used

### Installation:

* 

### Development Tools:

* Figma
* Trello Board
* Github
* Insomnia 
* Google Chrome dev tools



### Front-end:

* React
* Axios
* React Router Dom



## Brief



#### Necessary Deliverables:

* Working App hosted on the internet.
* User 


## Planing



### Wireframe Plan:


### Project Management on Trello:




## Project Breakdown

### Day 1 - Project Planning and Initialization:

- create a repository in GitHub
- Create the App install React and typescript
- Set up the app creating a root and test it


### Day 2-4 - Backend Development

1. Set Up Project:
- Initialized a new Node.js project `npm init -y`.
- Since I am building with typescript it was required a webpack to bundle, added a loader and added some scripts to the package.json like start and build.
- Installed necessary dependencies (express, mongoose, bcrypt, jsonwebtoken, etc.)
- Tested with if the route was making a good connection and the insonia was able to get requests.
2. Create Database Schema:
- Connected the data with mongoDB.
- Created an env file to secure my password. 
- Created an user Schema, include fields for username, email, password. virtual field for the passwordconfirmation.
- Created a custom method for a schema to disable all special characters for use in a password.
3. User Registration:
- Create an endpoint to handle user registration (`/register`).
- Hash the user's password using `bcrypt` before storing it in the database.
- Created the conection by the routes.
- Handle user errors.
4. User Login:

5. Token Generation (JWT):

6. Authentication Middleware:

7. Protected Routes:

8. User Logout:

### Day 5 - 12  Frontend Development




## Final Product

### Home Page:

![Home Page](<readmeimg/H page.png>)


### Login Page:

![Login Page](<readmeimg/L page.png>)


### Register Page:

![Register Page](<readmeimg/R page.png>)



### Garments Page:




### Reviews Page:



### Not Found Page: 




### Wins

1. 


### Challenges

1. In the register route in controllers for name dupliucates i wanted to throw an error that can say the user email or username already exixts.
The problem is even if I changed the user email to be different and username to be equal the error message would be always the email is the same.
How did I fix the error?


### Key Learnings




### Bugs




### Future Improvements

* 