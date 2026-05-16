export default function Box(props){
    const lst = []
    for(let i = 0; i < 10; i++){
        lst.push({num: props.num, color: props.color})
    };
    return(
        <>
            {lst.map((el, index) => <p key={index} className={`text-${el.color}`}>{el.num}</p>)}
        </>
    )
}