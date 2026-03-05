
import {useEffect,useState} from "react"
import axios from "axios"

function Profile(){

 const [profile,setProfile] = useState(null)

 useEffect(()=>{
   axios.get("http://localhost:5000/profile")
   .then(res=>setProfile(res.data))
 },[])

 if(!profile) return <p>Loading...</p>

 return(

 <div style={{border:"1px solid #ddd",padding:"20px",width:"400px"}}>

 <img src={profile.profilePic} width="120"/>

 <h2>{profile.name}</h2>

 <p>{profile.bio}</p>

 <h3>Skills</h3>

 {profile.skills.map((skill,i)=>(
   <span key={i} style={{marginRight:"10px"}}>{skill}</span>
 ))}

 <div style={{marginTop:"10px"}}>
   <a href={profile.github}>Github</a> |
   <a href={profile.linkedin}> LinkedIn</a>
 </div>

 </div>

 )

}

export default Profile
