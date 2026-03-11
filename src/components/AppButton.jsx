export default function button(props) {
    return (
        <button onClick={props.onClick} type="button" className="btn btn-primary mx-3" key={props.id}>
            {props.title}
        </button>
    )
}