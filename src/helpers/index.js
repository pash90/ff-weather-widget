/** Libraries */
import Axios from 'axios';

/** Initialisation */
const API_KEY = 'ea673ab0632c222745da7a3083ff407a';
const axiosInstance = Axios.create({
	baseURL: 'https://api.openweathermap.org/data/2.5/',
});

const DIRECTIONS = [
	'N',
	'NNE',
	'NE',
	'ENE',
	'E',
	'ESE',
	'SE',
	'SSE',
	'S',
	'SSW',
	'SW',
	'WSW',
	'W',
	'WNW',
	'NW',
	'NNW',
];

export const fetchWeatherForCoordinates = (latitude, longitude) =>
	axiosInstance.get(`weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`);

/**
 * Retreived this helpful converter from StackOverflow.
 * Answer Link: https://stackoverflow.com/a/25867068
 * @param {number} degree
 */
export const getWindDirection = degree => {
	const val = Math.floor(degree / 22.5 + 0.5);

	return DIRECTIONS[val % 16];
};
