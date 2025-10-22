import { IconButton } from "../IconButton";
import { Task } from "../Task";
import { Timer } from "../Timer";
import "./focus.css"
import { Edit} from "react-feather";

export function Focus({ children }) {
    return (
        <div className="focus">
            <div className="focus-header">
                <div className="focus-data">
                    <h1>{children}</h1>
                    <Timer timerName={"Timer"} timerDuration={"60min"}/>
                    <Timer timerName={"Short break"} timerDuration={"10min"} color="#497EA0" backgroundColor="#DDF0FE"/>
                    <Timer timerName={"Long break"} timerDuration={"30min"} color="#41A159" backgroundColor="#DFF9DE"/>
                </div>
                <IconButton Icon={Edit} color="#6C6C6C"/>
            </div>
            <h1 className="tasks-title">Tasks</h1>
            <Task taskName={"Study for the test"}/>
        </div>
    )
}