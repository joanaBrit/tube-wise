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
* User friendly.


## Planing




### Project Management:

This is a project to showcase some skills and keep learning in this case for the first time working with Typescript and Material UI. I'm doing this side project as well while searching for a job, then was not a limit time to complete, the most importante is to learn. 


## Project Breakdown

### Project Planning and Initialization:

1. Design Planning

Developed the app prototype on Figma to visualize the user interface, define features, and establish the design.

2. Repository Setup <!-- Ask David if this part is ok!!!!!!!!!!!!!!!!!!! >

Created a new repository on GitHub to manage version control.

3. Application Initialization

Initialized the project using React and TypeScript for a maintainable architecture.


### Backend Development

1. Project Setup

Initialized a new Node.js project `npm init -y`.

Configured TypeScript and Webpack for efficient bundling.

Added essential dependencies: `express`, `mongoose`, `bcrypt`, `jsonwebtoken`, and more.

Tested routes with Insomnia.

2. Database Schema

Integrated MongoDB for database management.

Secured credentials with an `.env` file. 

Designed a User Schema:

  Fields: username, email, password and a virtual field for the passwordconfirmation.

  Added a custom method for a schema to disable all special characters for use in a password.

3. User Authentication

Registration:

  Endpoint `/register`.

  Password hashing using `bcrypt`.

Login:

Endpoint `/login`.

Error handling for invalid credentials.

4. Token-Based Authentication

Generated JWT tokens upon successful login.

Implemented middleware to verify tokens and protect routes.

5. Protected Routes

Added secure endpoints accessible only to authenticated users. <!-- MAKE SURE that this exist or delete !>

6. Error Handling

Developed custom error classes and middleware for better debugging and maintainability.

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

5. Working with the API data

- Fetched the tube lines data and styled

- Implemented a footer with help information, social media and styled

- Implemented a popover and a logic to show the line status only when is not Good service

- Connected the journey page to the App
- Allow the user to have access to the page only if it's login in.

- See how the journey API works, from - to, tested. jsonprettify was really good to see and understand better the data.
- since I wante to use the lines in a dropdown there is no point to fect everytime because in this case it will be static, will not be changing constantly, so I decided to search an I found this usefull resource where it has the naptanID of each line.
- Copied the naptanID from the sourse, created and exported the variable NAPTAN_IDS and pasted on my constants file.  
- created two functions one for From dropdown and the other for the To dropdown.
- MUI dropdown basic select see the documentation and try to implement.
- set the inial render for from and to.

- Utilized the Tubelines ApiProps for my journey page, to extract the linestatuses.
- Refactored the dropdown component functions to enhance maintainability and ease of development. Introduced props as arguments, allowing easier manipulation of dropdown values.

- For the screenshot problems:
I was using the display name of the tube station instead of the naptanID.
Because the display it was a string they were giving a lot of choices, and that was not what I needed.
So instead of having on the dropfunctions:
```Typescript
<MenuItem key={option.naptanID} value={option.commonName}>
  {option.commonName}
</MenuItem>

```
it was changed to:
```Typescript
<MenuItem key={option.naptanID} value={option.naptanID}>
  {option.commonName}
</MenuItem>

```
- Inserted a button to trigger the plan the journey action when is clicked after choosing the from and to.
- handle the button and refactored to be more readable.
Also I could just do this 
```Typescript
<Button onClick={getJourneyData()}>Plan</Button>
```
but decided to keep:
```Typescript
 const handlePlanJourney = () => {
    console.log('Plan Journey', from, 'to', to)
    getJourneyData()
  }
...
<Button onClick={handlePlanJourney}>Plan</Button>
```
- filterd the data just to have the tube lines stations options.

- styling fixes - mobile view

- Added jest for testing
- had some issues with jest.config and set up file (did some diferent instalation, tried differents ways to set up the config)
-  needed to unistall some dependencies from create react app
- instead of having webpackage installed vite, it make it faster to load
- create the testing components for each component




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