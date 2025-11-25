import "./icon-button.css";

export function IconButton({ Icon, size, color, onClick }) {
    return (
        <button className="icon-button" onClick={onClick}>
            <Icon size={size} color={color} />
        </button>
    );
}