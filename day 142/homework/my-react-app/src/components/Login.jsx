import { useState } from "react";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    function changeEmail(event){
        setEmail(event.target.value)
    }
    function changePassword(event){
        setPassword(event.target.value)
    }
    function validate(){
        if(!email.includes('@') || !email.includes('.')){
            setErrorMessage(e => "Your email should have @ and . character")
        }
        else if(email.indexOf('.') === email.length - 1){
            setErrorMessage(e => "After . you have to write something")
        }
        else if(email.indexOf('@') === 0){
            setErrorMessage(e => "You have to write something before @ in your email")
        }
        else if(email.indexOf('@') > email.indexOf('.')){
            setErrorMessage(e => "In your email @ character should be before .")
        }
        else if(password.length < 8){
            setErrorMessage(e => "Your password should be at least 8 characters")
        }
        else{
            setErrorMessage(e => "")
        }
    }
    return(
        <div>
            <h1 className="text-5xl font-bold">Login</h1>
            <div className="flex-col flex space-y-3 p-2 bg-[#f4f4f4] rounded w-[240px] h-[330px] border-4 border-gray-700">
            <label className="text-2xl font-bold">Email:</label>
            <input className="font-bold text-2xl w-[90%] h-[40px] border-4 border-gray-700 rounded" type="text" onChange={(event) => changeEmail(event)} value={email}/>
            <label className="text-2xl font-bold">Password:</label>
            <input className="font-bold text-2xl w-[90%] h-[40px] border-4 border-gray-700 rounded" type="password" onChange={(event) => changePassword(event)} value={password}/>
            <button className="rounded text-white w-[190px] h-[30px] bg-amber-800 cursor-pointer transition-colors hover:bg-amber-700" onClick={validate}>Submit</button>
            <div className="text-red-600 font-bold text-2xl">{errorMessage}</div>
            </div>
        </div>
    )

}