import axios from "axios"

export async function getProfilesName() {
    
  const res = await fetch('http://localhost:3081/getAllCompany')
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
  
  await axios.post("http://localhost:3081/getCompanyInfoByName",{
    company_name:id,
  }).then((reponse)=>{
    profile= reponse.data
  })
  
  return {
    profile,
  }
}