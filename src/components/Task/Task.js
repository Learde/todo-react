import './Task.scss';
import check from './checked.svg';
import React from 'react';

const Task = (props) => {
	let classList = 'Task ' + props.className;
	if (props.done) {
		classList += ' Task--checked';
	}
	return (
		<div className={classList} onClick={props.click.bind(this, props.id)}>
			<div className="Task__checkbox">
				<img src={check} className="Task__img" alt="X" />
			</div>
			<p className="Task__text">{props.text}</p>
		</div>
	);
}

export default Task;