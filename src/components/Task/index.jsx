import { useState } from "react";
import { TaskDate } from "../TaskDate";
import { IconTextButton } from "../IconTextButton";
import "./task.css";
import { PlusCircle } from "react-feather";

export function Task({ id, focusId, taskName, dueDate, completed, onUpdate, onDelete, onCreate }) {
    const [isChecked, setIsChecked] = useState(completed || false);
    const [showNewTask, setShowNewTask] = useState(false);
    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [newTaskDate, setNewTaskDate] = useState("");

    const handleCheckboxChange = async () => {
        const newChecked = !isChecked;
        setIsChecked(newChecked);
        await onUpdate({
            id,
            title: taskName,
            completed: newChecked,
            due_date: dueDate
        });
    };

    const handleCreateTask = async () => {
        if (newTaskTitle.trim()) {
            await onCreate({
                title: newTaskTitle,
                completed: false,
                due_date: newTaskDate || null,
                focus_id: focusId
            });
            setNewTaskTitle("");
            setNewTaskDate("");
            setShowNewTask(false);
        }
    };

    return (
        <div>
            <div className="task">
                <label className="checkbox">
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <span className="checkmark"></span>
                    <p>{taskName}</p>
                </label>
                {dueDate && <TaskDate date={dueDate} />}
            </div>

            {showNewTask ? (
                <div className="new-task-form">
                    <input
                        type="text"
                        placeholder="Task title"
                        value={newTaskTitle}
                        onChange={(e) => setNewTaskTitle(e.target.value)}
                    />
                    <input
                        type="date"
                        value={newTaskDate}
                        onChange={(e) => setNewTaskDate(e.target.value)}
                    />
                    <button onClick={handleCreateTask}>Add</button>
                    <button onClick={() => setShowNewTask(false)}>Cancel</button>
                </div>
            ) : (
                <IconTextButton
                    Icon={PlusCircle}
                    text="New task"
                    onClick={() => setShowNewTask(true)}
                    style={{ width: '100%' }}
                />
            )}
        </div>
    );
}