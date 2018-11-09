/** Libraries */
import React from 'react';
import { Col } from 'react-grid-system';

/**
 * @typedef EditorProps
 * @property {'Yes' | 'No'} wind
 * @property {'C' | 'F'} temperature
 * @property {Function} onTitleChange
 * @property {Function} onTemperatureUnitChange
 * @property {Function} onWindDisplayStatusChange
 */

/**
 * @class Editor
 * @augments React.Component<EditorProps>
 */
class Editor extends React.Component {
	updateTitle = event => this.props.onTitleChange(event.target.value);

	updateTemperature = event => this.props.onTemperatureUnitChange(event.target.value);

	updateWind = event => this.props.onWindDisplayStatusChange(event.target.value);

	render() {
		const { wind, temperature } = this.props;

		return (
			<Col xs={12} sm={6} className="flex col editor margin-top-4">
				<label>Title</label>
				<input type="text" onChange={this.updateTitle} placeholder="Title of widget" />

				<label className="margin-top-3">Temperature</label>
				<div className="flex margin-top-1">
					<div className="flex center margin-right-4">
						<input
							type="radio"
							value="C"
							checked={temperature === 'C'}
							onChange={this.updateTemperature}
							className="margin-right-1"
						/>
						<label>
							<sup>o</sup>C
						</label>
					</div>

					<div className="flex center">
						<input
							type="radio"
							value="F"
							checked={temperature === 'F'}
							onChange={this.updateTemperature}
							className="margin-right-1"
						/>
						<label>
							<sup>o</sup>F
						</label>
					</div>
				</div>

				<label className="margin-top-3">Wind</label>
				<div className="flex margin-top-1">
					<div className="flex center margin-right-4">
						<input
							type="radio"
							value="Yes"
							checked={wind === 'Yes'}
							onChange={this.updateWind}
							className="margin-right-1"
						/>
						<label>On</label>
					</div>

					<div className="flex center">
						<input
							type="radio"
							value="No"
							checked={wind === 'No'}
							onChange={this.updateWind}
							className="margin-right-1"
						/>
						<label>Off</label>
					</div>
				</div>

				<div className="border" />
			</Col>
		);
	}
}

export default Editor;
