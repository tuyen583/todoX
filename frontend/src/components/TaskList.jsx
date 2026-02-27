import React from 'react';
import TaskEmptyState from './TaskEmtyState';
import { TaskCard } from './TaskCard';

export const TaskList = () => {
	let filter = 'all';
	const filterTasks = [
		{
			_id:"1",
			title: 'Task 1',
			description: 'Description 1',
			completedAt: null,
			createdAt: new Date(),
		},
		{
			_id:"2",
			title: 'Task 2',
			description: 'Description 2',
			completedAt: new Date(),
			createdAt: new Date(),
		},
	]
	if (!filterTasks || filterTasks.length === 0) {
		return <TaskEmptyState filter={filter}/>;
	}
	return (
		<div className="space-y-4">
			{
				filterTasks.map((task , index) => (
					<TaskCard key={task._id ?? index} 
					task={task}
					index={index}
					/>
				))
			}
			</div>
  );
};
export default TaskList;