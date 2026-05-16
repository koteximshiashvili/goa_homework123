export default function UserStatus({ loggedIn }){
    return(
        <p>{loggedIn ? "Welcome Back" : "Please Register"}</p>
    )
}