export default function UserList({ users }){
    return (
        <>
        {users.map((user, index) => (
        <div key={index} className="relative flex flex-col items-center justify-evenly w-[500px] h-[490px] bg-white rounded-[10px] p-[30px] shadow-md overflow-hidden break-words">
            <div className="w-[110%] h-[20%] flex relative self-center">
                <img src={user.img} alt="dd" className="absolute w-[600px] h-[175%] left-0 top-[-35px] object-cover rounded-t-[10px]" />
            </div>
            <img src={user.img} alt={user.name} className="w-[150px] h-[150px] rounded-full z-20 border-[5px] border-white relative -mt-[75px]" />
            <p className="text-black font-extrabold text-[24px] relative bottom-[10px]">{user.name}</p>
            <p className="text-[20px] font-extrabold text-gray-500 relative bottom-[20px]">{user.company}</p>
            <div className="flex gap-[10px] relative bottom-[20px] text-[20px] font-extrabold text-gray-600">
                <span>city: {user.city}</span>
                <span>email: {user.email}</span>
                <span>user: {user.username}</span>
            </div>
            <button className="w-[140px] h-[40px] font-bold rounded-full text-white bg-[#141828] text-[18px] cursor-pointer">Follow</button>
            </div>
        )
    )}
    </>
      );
}