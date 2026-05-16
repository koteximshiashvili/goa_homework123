function ProfileCard(props){
    return(
        <div className="w-sm bg-white rounded-lg shadow-md p-6 text-center">
            <img className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" src={props.avatar} alt={props.name} />
            <h1 className="text-xl font-semibold text-gray-800">{props.name}</h1>
            <p className="text-gray-600 mb-4">{props.description}</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors" onClick={(event) => event.target.textContent = "Following"}>Follow</button>
        </div>
    )
}
export default ProfileCard