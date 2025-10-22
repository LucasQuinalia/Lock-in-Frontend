import "./icon-button.css"

export function IconButton({ Icon, size = 24, color = "#5863D6" }) {
    return (
        <div className="icon-button">
            {Icon && <Icon size={size} color={color}/>}
        </div>
    )
}