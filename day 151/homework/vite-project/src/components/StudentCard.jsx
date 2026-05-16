export default function StudentCard({ fullName, score, goingToSchool }){
    return(
        <div>
            <h1>{fullName}</h1>
            <p>{score}</p>
            <p>{goingToSchool}</p>
        </div>
    )
}