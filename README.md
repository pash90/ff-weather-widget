# Weather Widget

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instructions

Clone the project first and then, from the directory, you can run:

### `npm install` || `yarn install`

Installs all the required dependencies.
<br><br>

### `npm start` || `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
<br><br>

### `npm run build` || `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

<br><br>

## Assumptions

- The widget needs to be responsive
- If `navigator` fails to retreive a location, then the default location is Sydney.

<br><br>

## Liberties

- In the display widget, the weather icon size is smaller than in designs due to OpenWeatherMaps having only returning a fix size image(50 x 50);
-
