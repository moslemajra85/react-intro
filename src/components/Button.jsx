
const Button = (props) => {
    return (
        <button
            onClick={props.handleClick}
            style={{
                color: props.color ? props.color : 'black',
                backgroundColor: props.bgColor ? props.bgColor : "#ddd",
                border: "none",
                borderRadius: "8px",
                padding: "12px 16px",
                cursor: "pointer",
                fontSize: "18px"
            }}>
            {props.children}
        </button>
    )
}

export default Button