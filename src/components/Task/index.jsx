import { TaskDate } from "../TaskDate";
import { IconTextButton } from "../IconTextButton";
import "./task.css"
import { PlusCircle } from "react-feather"

export function Task({ taskName, dueDate }) {
    return (
        <div>
            <div className="task">
                <label className="checkbox">
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                    <p>{taskName}</p>
                </label>
                <TaskDate date={dueDate}/>
            </div>
            <IconTextButton Icon={PlusCircle} text="New task"/>
        </div>
    )
}