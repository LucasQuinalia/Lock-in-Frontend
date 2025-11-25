import "./icon-text-button.css";

export function IconTextButton({ Icon, text, onClick, style, className }) {
    return (
        <button className={'icon-text-button'} onClick={onClick} style={style}>
            <Icon size={24} />
            <span>{text}</span>
        </button>
    );
}