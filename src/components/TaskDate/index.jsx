import { Calendar } from "react-feather"
import "./task-date.css"

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

function formatDate(dateString) {
    if (!dateString) return ""

    const date = new Date(dateString)
    if (isNaN(date.getTime())) return ""
    
    const day = date.getDate()
    const month = date.toLocaleString("en-US", { month: "short"})

    const suffix = 
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th"

      return `${day}${suffix} ${month}.`
}

export function TaskDate({ date }) {
const formattedDate = formatDate(date)

    return (
        <div className="date">
            <Calendar size="24" strokeWidth={2}/>
            <p>{formattedDate}</p>
        </div>
    )
}