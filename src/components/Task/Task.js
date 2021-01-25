import './Task.scss';
import 'checked.svg';
import React from 'react';

const Task = (props) => {
	let classList = 'Task ' + props.className;
	if (props.done) {
		classList += ' Task--checked';
	}
	return (
		<div className={classList}>
			<div className="Task__checkbox" onClick={props.click.bind(this, props.id)}></div>
			<p className="Task__text">{props.text}</p>
		</div>
	);
}

export default Task;