# Tube-Wise



#### Timeframe




## Are you ready to think wisely when planning your route?

[Tube Wise]()


## Technologies Used

### Installation:

* 
* npm i react-zoom-pan-pinch (zoom in feature)

### Development Tools:

* Figma
* Github
* Insomnia 
* Google Chrome dev tools



### Front-end:

* React
* typescript
* Axios
* React Router Dom
* Material UI


### Back-end:

* Typescript
* Node.js




## Brief

- Using Transport for London API, 500 Request per minute.

#### Necessary Deliverables:

* Working App hosted on the internet.
* User friendly


## Planing




### Project Management:




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
- Created a form for user to login and register.
- inserted submit form data function to send data to the server.
- created a folder called common in the middle of front end and back end to be able to use the error from the backend errors with the front end I exported the types.
- 


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
- Tested in Insomnia.
- Installed Material UI and addet to the form.
- Debbuging and refactoring the user errors from the back end.
- installed cors to make the connection between front end and back end.
- Tested in insomnia and in the browser.
- installed some material ui dependencies
- Inserted a Navbar, made the connection file and did some styling for laptop and mobile view.
- Create the onClick event to navigate to the correspond pages on my Nav bar.
- Created a form layout to style the register and login form and to switch between one and another.
- Styling the Register and Login form.
- Inserted the events handling, make it work as pretend on the Nav bar for destop and mobile view and make the navigation to the respective pages.

- Created a Map file and establish the navigation on the App.tsx
- Searched and inserted a picture of the tube lines map
- installed react-zoom-pan-pinch
- Inserted a zoom in, zoom out and a clear button.
- inserted logic to disable the buttons when they're not needed.



To do:

Home Page:
- add the descreption.... about tube wise ✅
- Missing something
- style

Footer:
Make a footer with tube web page in case 
- Get help: tube page
- 2024 Tube Wise
- support : email
- Git hub
- Style

Map Page
- Have the map image from Tube ✅
- Style it

Check your journey:
- Fetch Tube API for the user to be able to choose the route
- Fetch API to for the Info about the line (Good, Delays....)
- Style:
- From: To:
- Date
- A selecter to select the tube lines


Tube lines
- Fetch the API to show the tube lines
- Info about the Station Data if it's close


Tube Lines index
- Fetch API to for the Info about the line (Good, Delays....)
- Lift disruptions for people accessibility.
- Info about if it's crowding
- Info about AccidentStats


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

2. I was writing this code snippet, I found myself wondering why I kept the event parameter if I wasn't using it. Well, it turns out it is still essential because, when the function is called, the first parameter passed will always be the event, and not my newValue!

These small learnings come from practice and foster a continuous journey of growth and improvement as a developer. 

``` typescript

const handleTabChange = (event, newValue) => {
    setChecked(newValue)
  }

```



### Bugs




### Future Improvements

* 