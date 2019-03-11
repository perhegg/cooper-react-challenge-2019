This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


### Question:

In the current implementation of the Cooper Challenge (the way we presented it to you), where are we doing the calculation or rather where do we check the result of the Cooper test. On the client or on the server?What are the pros and cons of doing it that way?

We keep the Cooper logic on the client side. 

Having the logic on the client side makes the page run faster (after the initial load). It has access to rich site interactions. The code is out there for other people to see. 
In most cases it needs an external library with makes it more vulnerable. 

Having the logic on the server side runs slower but faster on the initial load. You need to have great server power to be able to handle all requests. Server power costs alot of money to run smoothly and safetely. The user experience is based on the location of the server and the internet connection speed. 
The server have a better SEO with search engines that can search through the servers to fetch desired data. 
It's a better and more secure place to keep sensitive data (like passwords and personal information). 
