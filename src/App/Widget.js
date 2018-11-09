/// <reference path="../types.js" />

/** Libraries */
import React from 'react';
import { Col } from 'react-grid-system';

/** Helpers */
import { fetchWeatherForCoordinates, getWindDirection } from '../helpers';

const ICON_BASE_URL = 'https://openweathermap.org/img/w/';

/**
 * @typedef WidgetProps
 * @property {string} title
 * @property {'C' | 'F'} tempUnit
 * @property {boolean} showWind
 */

/**
 * @typedef WidgetStateProps
 * @property {number} latitude
 * @property {number} longitude
 * @property {WeatherBrief} [weatherSummary]
 */

/**
 * @class Widget
 * @augments React.Component<WidgetProps, WidgetStateProps>
 */
class Widget extends React.Component {
	state = {
		latitude: -33.8688,
		longitude: 151.2093,
		weatherSummary: undefined,
	};

	componentDidMount() {
		if ('geolocation' in navigator) {
			// geolocation available
			navigator.geolocation.getCurrentPosition(position => {
				this.setState(prevState => ({
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
				}));
			});
		} else {
			// geolocation not available so using default
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (JSON.stringify(prevState) !== JSON.stringify(this.state)) {
			// fetch data here
			const { latitude, longitude } = this.state;
			fetchWeatherForCoordinates(latitude, longitude).then(response => {
				this.setState(prevState => ({
					weatherSummary: response.data,
				}));
			});
		}
	}

	render() {
		const { title, tempUnit, showWind } = this.props;
		const { weatherSummary } = this.state;

		if (!weatherSummary) {
			return <noscript />;
		}

		const {
			name,
			weather,
			wind: { speed, deg },
			main: { temp },
		} = weatherSummary;
		const tempInCelsius = temp - 273.15;

		return (
			<Col xs={12} sm={6} className="margin-top-4">
				<div className="widget">
					<h3>{title.length > 0 ? title : 'TITLE OF WIDGET'}</h3>

					<div className="flex center margin-top-3">
						<img className="icon margin-right-2" src={ICON_BASE_URL + weather[0].icon + '.png'} />

						<div className="flex col">
							<p className="location">{name}</p>
							{tempUnit === 'C' ? (
								<h1 className="temperature">
									{Math.round(tempInCelsius)} <sup>o</sup>C
								</h1>
							) : (
								<h1 className="temperature">
									{Math.round((tempInCelsius * 9) / 5 + 32)} <sup>o</sup>F
								</h1>
							)}
						</div>
					</div>
					{showWind && (
						<p className="margin-top-2">
							<strong>Wind</strong>: {getWindDirection(deg)} {speed * 3.6} km/h
						</p>
					)}
				</div>
			</Col>
		);
	}
}

export default Widget;
