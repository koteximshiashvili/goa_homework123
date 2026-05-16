export default function Task(props){
    return(
        <>
            <p>{props.name}</p>
            <p>{props.time}</p>
            <button onClick={(event) => event.target.textContent = "Completed"}>Complete</button>
        </>
    )
}