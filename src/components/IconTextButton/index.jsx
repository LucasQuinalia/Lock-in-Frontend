import "./icon-text-button.css"

export function IconTextButton({ Icon, text, size = 24 }) {
    return (
        <div className="icon-text-button">
            {Icon && <Icon size={size} color="currentColor"/>}
            {text && <span>{text}</span>}
        </div>
    )
}