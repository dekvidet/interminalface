import React from 'react';
import { addHighlightClass, removeHighlightClass } from '../../services/mapHighlighter';
import style from './style.css';

const ControlButton = ({onButtonClick, mapSelector, selectorClass, children }) => (
	<button
		onClick={onButtonClick}
		onMouseEnter={() => addHighlightClass(mapSelector, selectorClass)}
		onMouseLeave={() => removeHighlightClass(mapSelector, selectorClass)}
		className={`btn btn-default ${style.controlButton}`}
	>{children}</button>
);

ControlButton.propTypes = {
	onButtonClick: React.PropTypes.func,
	mapSelector: React.PropTypes.string,
	selectorClass: React.PropTypes.string,
	children: React.PropTypes.string,
};

ControlButton.defaultProps = {
	onButtonClick: x => x,
	mapSelector: '',
	selectorClass: 'highlight',
	children: '',
};

export default ControlButton;