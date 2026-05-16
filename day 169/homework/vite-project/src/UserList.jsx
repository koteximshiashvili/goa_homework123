import { useState, useEffect } from 'react'

const UserList = () => {
    const [users, setUsers] = useState([])
    const [isOk, setIsOk] = useState(true)
    useEffect(() => {
        async function getData() {
            try{
                const fetchedData = await fetch("https://jsonplaceholder.typicode.com/users")
                if (!fetchedData.ok){
                    throw new Error("error");
                }
                const data = await fetchedData.json();
                console.log(data, fetchedData)
                setUsers(data)
            } catch(err){
                setIsOk(false);
                console.error(err);
            }
        }
        getData()
    }, [])
    return (
        <>
            {!isOk ? <p>Error Loading Users</p> : users.length ? users.map(el => (
                <div key={el.id}>
                    <p>Name: {el.name}</p>
                    <p>Email: {el.email}</p>
                </div>
            )) : <p>Loading...</p>}
        </>
    )
}

export default UserList