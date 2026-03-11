export default function button(props) {
    return (
        <button onClick={props.onClick} type="button" className={`btn mx-3 ${props.isActive ? "btn-warning" : "btn-primary"}`}
            key={props.id}>
            {props.title}
        </button>
    )
}