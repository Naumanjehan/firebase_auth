import { signOut } from "firebase/auth"
import { auth } from "../firebase"

function Private() {

  const handleSignout=()=>{
    signOut(auth)
    .then(()=> alert("Sign Out Successfully"))
    .catch(error=>{
      console.log(error)
      alert(error.messege)
    })
  }
  return (
    <div style={{display:'flex', justifyContent:'center', flexDirection: 'column'}}>
      <h1>Private Page</h1>
      <button onClick={handleSignout} style={{backgroundColor: "blue"}}>SignOut</button>
    </div>
  )
}

export default Private
