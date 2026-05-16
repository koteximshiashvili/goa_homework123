const Register = () => {
    function handleRegister(e){
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        localStorage.setItem("user", JSON.stringify({name: data.get('fullname'), email: data.get('email'), password: data.get('password')}))
    }
  return (
    <form onSubmit={(e) => handleRegister(e)}>
        <h1 className="font-black text-2xl">Register</h1>
        <input name="fullname" type="text" className="rounded-2xl border-2 border-black font-black"/>
        <input type="text" name="email" className="rounded-2xl border-2 border-black font-black"/>
        <input type="text" name="password" className="rounded-2xl border-2 border-black font-black"/>
        <button type="submit" className="rounded-xl border-2 border-black font-black text-[18px]">Submit</button>
    </form>
  )
}

export default Register