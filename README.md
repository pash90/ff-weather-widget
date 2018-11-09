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

- In the display widget, the weather icon size blurred compared to the designs due to OpenWeatherMaps having only returning a fix size image(50 x 50)
- Default Location : Sydney. The reason for this is `navigator.geolocation` is only available in secure contexts and as such, can not guarantee that it will work in all browsers.

<br><br>

## Libraries

- `axios` : For making network requests to OpenWeatherMaps. I used it since it allows me to use Promises in requests
- `react-grid-system`: For a creating the layout and ensuring mobile responsiveness

<br><br>

## Time Taken

11:44AM - 1:55PM

<br><br>

## Thoughts

I felt the test was relatively on the easier side. I believe that if the test involved showing a map and updating the weather once the user has selected a location on the map, it'd would have probably taken me the full amount of test time provided i.e. 3hrs.
