import './Task.scss';
import React from 'react';

const Task = (props) => {
	let classList = 'Task ' + props.className;
	if (props.done) {
		
	}
	return (
		<div className={classList}>

		</div>
	);
}

export default Task;