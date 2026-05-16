import StudentCard from "./StudentCard.jsx";
export default function StudentList({ students }){
    return(
        <>
            {students.map(el => (
                <StudentCard fullName={el.name} score={el.score} goingToSchool={el.goingToSchool}/>
            ))}
        </>
    )
}