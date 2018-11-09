/** Libraries */
import React from 'react';
import ReactDOM from 'react-dom';
import { setConfiguration } from 'react-grid-system';

/** Components */
import App from './App';

/** Styles */
import './index.scss';

/** Initialisation */
setConfiguration({
	gutterWidth: 16,
	containerWidths: [540, 750, 960, 960],
});

ReactDOM.render(<App />, document.getElementById('root'));
