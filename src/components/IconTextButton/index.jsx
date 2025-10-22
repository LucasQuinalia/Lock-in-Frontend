import "./icon-text-button.css"

export function IconTextButton({ Icon, text, size = 24, color = "#5863D6" }) {
    return (
        <div className="icon-text-button">
            {Icon && <Icon size={size} color={color}/>}
            {text && <span>{text}</span>}
        </div>
    )
}