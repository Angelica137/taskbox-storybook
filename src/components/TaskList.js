import React from 'react';
import Task from './Task';
import TaskStories from './Task.stories';

export default function TaskList({ loading, TaskList, onPinTask, onArchiveTask }) {
    const events = {
        onPinTask, 
        onArchiveTask
    };

    if (loading) {
        return <div className="list-items">loading</div>;
    }

    if (Task.length === 0) {
        return <div className="list-items">empty</div>;
    }

    return (
        <div className="list-items">
            {tasks.map(task => (
                <Task key={task.id} task={task} {...events} />
            ))}
        </div>
    );
}