import axios from "axios"
//import {api} from '../pages/api/api'
const api = "http://localhost:3080"

export async function getProfilesName() {
    
    const res = await fetch(`${api}/getAllUsers`)
    const users = await res.json()
    return users.map(user => {
      return {
        params: {
          id: (user.user_id+"@"+user.user_name+"-"+user.user_firstname).replace(/\s+/g, '-').toLowerCase(),
        }
      }
    })
}

export async function getProfileData(id) {
  
  let profile=[];
  
  await axios.post(`${api}/getUserInfobyId`,{
    id:id,
  }).then((reponse)=>{
    profile= reponse.data
  })
  
  return {
    profile,
  }
}