import axios from "axios"

const api = "https://a-recruit-api.herokuapp.com";

export async function getProfilesName() {
    
  const res = await fetch(`${api}/getAllCompany`)
  const companies = await res.json()
  return companies.map(company => {
    //console.log(company.company_name.replace(/\s+/g, '-').toLowerCase())
    return {
      params: {
        id: company.company_name.replace(/\s+/g, '-').toLowerCase(),
      }
    }
  })
}

export async function getProfileData(id) {
  
  let profile=[];
  
  await axios.post(`${api}/getCompanyInfoByName`,{
    company_name:id,
  }).then((reponse)=>{
    profile= reponse.data
  })
  
  return {
    profile,
  }
}