/** Libraries */
import React, { Component } from 'react';
import { Container, Row } from 'react-grid-system';

/** Components */
import Editor from './Editor';
import Widget from './Widget';

/** Styles */
import './index.scss';

class App extends Component {
	state = {
		title: '',
		temperature: 'C',
		wind: 'Yes',
	};

	updateTitle = title =>
		this.setState(prevState => ({
			title,
		}));

	updateTemperature = temperatureUnit =>
		this.setState(prevState => ({
			temperature: temperatureUnit,
		}));

	updateWind = dispayWind =>
		this.setState(prevState => ({
			wind: dispayWind,
		}));

	render() {
		const { temperature, wind, title } = this.state;

		return (
			<Container>
				<Row>
					<Editor
						wind={wind}
						temperature={temperature}
						onTitleChange={this.updateTitle}
						onTemperatureUnitChange={this.updateTemperature}
						onWindDisplayStatusChange={this.updateWind}
					/>

					<Widget title={title} tempUnit={temperature} showWind={wind === 'Yes'} />
				</Row>
			</Container>
		);
	}
}

export default App;
