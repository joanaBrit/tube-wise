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
4. User Login:
- Create an endpoint to handle user registration (`/login`).
-Hash the user's password using `bcrypt` before storing in the database.
- Handle user errors.
5. Token Generation (JWT):
- Upon successful login, generate a JSON Web Token (JWT) to be sent to the client.
6. Authentication Middleware:
- Created a middleware to verify the JWT sent in the headers of protected routes.
- Ensured the token is valid before allowing access to protected resources.
7. Protected Routes:
- Created a secure route to authenticate if the user have is authenticate.
Error handlers
- Custom class
- Middleware authentication to protectted routes.
- Refactored and cleaned some lines of code.
### Day 5 - 12  Frontend Development
1. Set Up Project:
- Create a new React app, installed typescript and nessecery dependancies.
<!-- 2. User Interface:
- Designed buttons and  and implement user interfaces for registration, login, and other user-related actions. -->
3. API Requests:
- Use the fetch API or libraries like axios to make requests to your Node.js backend.
4. User Registration/Login Forms:
- Created a form for user to login.
- inserted submit form data function to send data to the server.
- Created handle Change and Submit.
- Incerted a folder to be able to use the error from the backend errors with the front end.


```Typescript
export type ServerResponse = ErrorResponse | RegisterUserResponse

export type ErrorResponse = {
  error?: string
}

export type RegisterUserResponse = {
  user: string
}

export type LoginResponse = {
  token: string,
  doNotNavigate?: boolean
}
```

- Handle form submissions, validate user input, and display appropriate messages.
- Create user authentication for the token.
- Debbuging and refacturing some parts code logic. 
- Login and register fields.

5. Token Storage:
- 
6. Protected Routes:
- 
7. User Logout:
- 

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
```typescript
 // If the user already exists
    const existingUser = await userModel.findOne({
      $or: [
        { email: req.body.email },
        { username: req.body.username }
      ]
    })

    const userInput: IUser = req.body

    if (existingUser) {
      // variable to store the duplicated
      let duplicatedField: string
      // compare the user input with the existing User
      if (userInput.email === existingUser.email) {
        duplicatedField = "email"
      } else {
        duplicatedField = 'username'
      }

      if (duplicatedField)
        throw new Error(`User with the same ${duplicatedField} already exists.`)
    }
```

2. As a first time learninging typescript sometimes it toke me a while where the erros were coming from and why it was happening, trying to not do javascript sometimes, since some parts are similar and typescript would accept then not showing error makes me douple check how was the proper way to write in TypeSxcript.

### Key Learnings

1. Learnind typescript, could be challege at time but then to see what you can get from it is very good.


### Bugs




### Future Improvements

* 