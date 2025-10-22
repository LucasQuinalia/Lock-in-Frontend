import { Calendar } from "react-feather"
import "./date.css"

const status = [
    {
        id:1,
        name: "pending",
        color: "#6C6C6C",
        backgroundColor: "#E4E4E4"
    },
    {
        id:2,
        name: "completed",
        color: "#41A159",
        backgroundColor: "#DFF9DE"
    },
    {
        id:3,
        name: "expired",
        color: "#C14949",
        backgroundColor: "#FFE0E0"
    }
]

export function Date({ date }) {
    return (
        <div className="date">
            <Calendar size="24" strokeWidth={2}/>
            <p>{date}</p>
        </div>
    )
}