import { useState } from "react";
import { IconButton } from "../IconButton";
import { Task } from "../Task";
import { Timer } from "../Timer";
import "./focus.css";
import { Edit, Trash2 } from "react-feather";
import { taskAPI } from "../../services/api";

export function Focus({ id, title, timer, shortBreak, longBreak, tasks, onUpdate, onDelete, onRefresh }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = async () => {
        if (editedTitle.trim()) {
            await onUpdate({
                id,
                title: editedTitle,
                timer,
                short_break: shortBreak,
                long_break: longBreak
            });
            setIsEditing(false);
        }
    };

    const handleDelete = async () => {
        if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
            await onDelete(id);
        }
    };

    const handleCreateTask = async (taskData) => {
        try {
            await taskAPI.create(id, { ...taskData, focus_id: id });
            await onRefresh();
        } catch (err) {
            console.error('Error creating task:', err);
            alert('Failed to create task');
        }
    };

    const handleUpdateTask = async (taskData) => {
        try {
            await taskAPI.update(id, taskData);
            await onRefresh();
        } catch (err) {
            console.error('Error updating task:', err);
            alert('Failed to update task');
        }
    };

    const handleDeleteTask = async (taskId) => {
        try {
            await taskAPI.delete(id, taskId);
            await onRefresh();
        } catch (err) {
            console.error('Error deleting task:', err);
            alert('Failed to delete task');
        }
    };

    return (
        <div className="focus">
            <div className="focus-header">
                <div className="focus-data">
                    {isEditing ? (
                        <input
                            type="text"
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                            onBlur={handleSave}
                            onKeyPress={(e) => e.key === 'Enter' && handleSave()}
                            autoFocus
                        />
                    ) : (
                        <h1>{title}</h1>
                    )}
                    <Timer timerName={"Timer"} timerDuration={`${timer / 60} min`} />
                    <Timer timerName={"Short break"} timerDuration={`${shortBreak / 60} min`} color="#497EA0" backgroundColor="#DDF0FE" />
                    <Timer timerName={"Long break"} timerDuration={`${longBreak / 60} min`} color="#41A159" backgroundColor="#DFF9DE" />
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <IconButton Icon={Edit} size="26" color="#6C6C6C" onClick={handleEdit} />
                </div>
            </div>
            <h1 className="tasks-title">Tasks</h1>
            {tasks.length > 0 ? (
                tasks.map((task) => (
                    <Task
                        key={task.id}
                        id={task.id}
                        foc

                        usId={id}
                        taskName={task.title}
                        completed={task.completed}
                        dueDate={task.due_date}
                        onUpdate={handleUpdateTask}
                        onDelete={handleDeleteTask}
                        onCreate={handleCreateTask}
                    />
                ))
            ) : (
                <p className="no-tasks">No tasks yet</p>
            )}
        </div>
    );
}