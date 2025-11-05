import "./icon-button.css"

export function IconButton({ Icon, size = 24 }) {
    return (
        <div className="icon-button">
            {Icon && <Icon size={size} color="currentColor"/>}
        </div>
    )
}