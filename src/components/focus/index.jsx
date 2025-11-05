import { IconButton } from "../IconButton";
import { Task } from "../Task";
import { Timer } from "../Timer";
import "./focus.css"
import { Edit } from "react-feather";

export function Focus({ title, timer, shortBreak, longBreak, tasks }) {
    return (
        <div className="focus">
            <div className="focus-header">
                <div className="focus-data">
                    <h1>{title}</h1>
                    <Timer timerName={"Timer"} timerDuration={`${timer / 60} min`}/>
                    <Timer timerName={"Short break"} timerDuration={`${shortBreak / 60} min`} color="#497EA0" backgroundColor="#DDF0FE"/>
                    <Timer timerName={"Long break"} timerDuration={`${longBreak / 60} min`} color="#41A159" backgroundColor="#DFF9DE"/>
                </div>
                <IconButton Icon={Edit} size="26" color="#6C6C6C"/>
            </div>
            <h1 className="tasks-title">Tasks</h1>
            {tasks.length > 0 ? (
                tasks.map((task) => (
                    <Task
                        key={task.id}
                        taskName={task.title}
                        completed={task.completed}
                        dueDate={task.due_date}
                    />
                ))
            ) : (
                <p className="no-tasks">No tasks yet</p>
            )}
        </div>
    )
}