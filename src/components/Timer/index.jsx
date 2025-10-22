import "./timer.css"

export function Timer({ timerName, timerDuration, color = "#713F88", backgroundColor = "#F2DFFD"}) {
    return (
        <div className="timer" style={{ color, backgroundColor }}>
            <p className="timer-name">{timerName}</p>
            <p className="timer-duration">{timerDuration}</p>
        </div>
    )
}