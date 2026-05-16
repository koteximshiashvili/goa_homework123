export default function Children({ person }) {
    return (
        <div className="w-[300px] h-[400px] rounded-2xl flex flex-col items-center bg-[#f4f4f4] p-4">
            <h1 className="font-bold text-3xl">{person.fullName}</h1>
            <img className="w-[90%] h-[30%] rounded-2xl" src={person.photo} alt={person.fullName} />
            <p className="font-bold">{person.desc}</p>
        </div>
    );
}
