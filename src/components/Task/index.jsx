import { Date } from "../Date";
import { IconTextButton } from "../IconTextButton";
import "./task.css"
import { PlusCircle } from "react-feather"

export function Task({ taskName,  }) {
    return (
        <div>
            <div className="task">
                <div className="task-details">
                    <label className="checkbox">
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                    <p>{taskName}</p>
                </div>
                <Date date={"2nd Mar."}/>
            </div>
            <IconTextButton Icon={PlusCircle} text="New task"/>
        </div>
    )
}