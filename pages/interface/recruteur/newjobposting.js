import axios from 'axios'
import React ,{useState} from 'react'
import Head from 'next/head'
import Header from '../../../components/header/header'
import { api } from '../../api/api'
import Agenda from '../../../components/others/agenda'
import Image from 'next/image'


export default function newjobposting({data}) {
    
    const [job_title, setJobTitle]=useState("JOB");
    const [job_country, setJobCountry]=useState('RPC');
    const [job_department, setJobDepartment]=useState('Yunan');
    const [job_required_grad, setJobRequiredGrade]=useState('Master');
    const [job_required_experience, setJobRequiredExperience]=useState('25');
    const [job_required_level, setJobRequiredLevel]=useState('24');
    const [job_city, setJobCity]=useState("Shanghai");
    const [job_zip_code, setJobZipCode]=useState("55452");
    const [job_origin, setJobOrigin]=useState("test");
    const [job_statut, setJobStatut]=useState("available");
    const [job_contract_type, setJobContractType]=useState("CDI");
    const [job_description_pdf,setJobDescriptionPdf]=useState(null);
    const [job_presentation_pdf, setJobPresentationPDF]=useState(null);
    const [job_presentation_video, setJobPresentationVideo]=useState('video');
    //New job 
    const diplomes = ['CAP', 'BEP', 'BAC', 'BTS/DUT', 'Licence', 'Master1', 'Master2', 'Doctorat']
    const niveauEtudes = ['BAC', 'BAC+1', 'BAC+2', 'BAC+3', 'BAC+4', 'BAC+5', 'BAC+6', 'BAC+7', 'BAC+8']
    const experience = ['débutant', '1 an à 2 ans', '2 ans à 3 ans', '3 ans à 4 ans', '4 ans à 5 ans' , '5 ans et plus (Senior)']
    
    const customImgLoader = ({ src }) => {
        return `${src}`
    }

    const job_description_pdf_info = (e)=>{
        loaded_file(e).then((result)=>{
            setJobDescriptionPdf({new:{...result,id:company_id,dest:`company`,identifier:'job_description_pdf'}})
        })
    }

    const job_presentation_pdf_info = (e)=>{
        loaded_file(e).then((result)=>{
            setJobPresentationPDF({new:{...result,id:company_id,dest:`company`,identifier:'job_presentation_pdf'}})
        })
    }

    const newJobPosting = (e)=>{

        console.log(job_presentation_pdf)

        e.preventDefault();

        if(!job_title || !job_contract_type || !job_country || !job_department || !job_required_grad || !job_required_level || !job_required_experience
            || !job_presentation_pdf || !job_presentation_video || !job_city || !job_zip_code  || !job_origin
            || !job_statut){

                alert('Veuillez remplire tout les champs')
            
        }else{

            Axios.post(`${api}/createJob`,{
                
                job_title:job_title,
                job_contract_type:job_contract_type,
                job_country:job_country,
                job_department:job_department,
                job_required_grad:job_required_grad,
                job_required_level:job_required_level,
                job_required_experience:job_required_experience,
                job_presentation_pdf:job_presentation_pdf,
                job_presentation_video:job_presentation_video,
                job_city:job_city,
                job_zip_code:job_zip_code,
                job_creator_id:company_id,
                job_origin:job_origin,
                job_statut:job_statut,
                job_description_pdf:job_description_pdf

            }).then((resutlt)=>{
                
                if(!resutlt.err){
                    window.location.reload(true)
                }else {
                    alert("Merci de remplir tous les champs")
                }
            });
        }
    }


    return (
        <div className="recruteur">

            <div className="interface-layout">
                <Head>
                    <title>A recruit | Recruteur</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Header
                />
                
                <main className="body w100 ">
                    <div className="beauty_top w100 center title orientationV">
                        {!data.company_logo ?
                            <div className="defaultLogo"><div>{data.company_name.charAt(0)}</div></div>
                            :
                            <div className="defaultLogo">
                                <Image alt="logo" loader={customImgLoader} src={data.company_logo} width={100} height={100}/>
                            </div>
                        }
                        <div style={{color:'#fff'}}> {data.company_name}</div>                        
                        <br></br>
                    </div>
                    <div id="new_demande" className="w90 register_todo_container">
                        <div className="new_demande orientationH  spaceBetween w90">
                            {/* CHAMPS DU FORMULAIRE */}
                            <div className="form_new_post orientationV">
                                <br></br>
                                <div className=" register_todo w100 orientationH spaceBetween center">
                                    <div className="w100 orientationH spaceBetween center">
                                        <label>Intitule du poste :</label>
                                        <input type="text" name="ent_name" required onChange={(e)=>{setJobTitle(e.target.value)}}/>
                                    </div>
                                </div>

                                <div className="register_todo w100 orientationH spaceBetween center">
                                    <div className="w100 orientationH spaceBetween center">
                                        <label>Pays :</label>
                                        <select className="form_select" required onChange={(e)=>{setJobCountry(e.target.value);loadDepartment(e.target.value)}}>
                                            <option>--Pays--</option>
                                            {data.europe_country.map((element, index) => {
                                                return <option key={index} value={element.name}>{element.name}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className="register_todo w100 orientationH spaceBetween center">
                                    <div className="w100 orientationH spaceBetween center">
                                        <label>Departement :</label>
                                        {data.departements.length!==0 ?
                                            <select className="form_select" required onChange={(e)=>{setJobDepartment(e.target.value)}}>
                                                <option>--Departement--</option>
                                                {data.departements.map((element, index) => {
                                                        return <option key={index}>{element.nom}</option>
                                                })}
                                            
                                            </select>
                                        :                                
                                        <input placeholder={data.company_department? data.company_department : "..."}type="text" name="ent_name"  onChange={(e)=>{setCompanyDepartment(e.target.value)}}/> 
                                    }
                                    </div>
                                </div>
                                <div className="register_todo w100 orientationH spaceBetween center">
                                    <div className="w100 orientationH spaceBetween center">
                                        <label>Diplôme requis :</label>
                                        <select className="form_select" required onChange={(e)=>{setJobRequiredGrade(e.target.value)}}>
                                            <option>--Choix--</option>
                                            {diplomes.map(diplomes => (
                                                <option key={diplomes}>{diplomes}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="register_todo w100 orientationH spaceBetween center">
                                    <div className="w100 orientationH spaceBetween center">
                                        <label>Niveau d'étude requis :</label>
                                        <select className="form_select" required onChange={(e)=>{setJobRequiredLevel(e.target.value)}}>
                                            <option>--Choix--</option>
                                            {niveauEtudes.map(niveauEtudes => (
                                                <option key={niveauEtudes}>{niveauEtudes}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="register_todo w100 orientationH spaceBetween center">
                                    <div className="w100 orientationH spaceBetween center">
                                        <label>Expérience requise :</label>
                                        <select className="form_select" required onChange={(e)=>{setJobRequiredExperience(e.target.value)}}>
                                            <option>--Choix--</option>
                                            {experience.map(experience => (
                                                <option key={experience}>{experience}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                            </div>
                            {/* CHAMPS DU FICHIERS */}
                            <div className="orientationV">
                                <br></br>
                                <div className=" file w100 orientationV spaceBetween ">
                                    <label>Fiche de poste :</label>
                                    <input type="file"  name="avatar" accept="application/pdf,application/vnd.ms-excel" onChange={(e)=>{job_description_pdf_info( e);}}/>
                                </div>

                                <div className=" file w100 orientationV spaceBetween ">
                                    <label>Présentation du poste en pdf:</label>
                                    <input type="file"  name="avatar" accept="application/pdf,application/vnd.ms-excel" required onChange={(e)=>{job_presentation_pdf_info( e);}}/>
                                </div>
                                
                                <div className=" file w100 orientationV spaceBetween ">
                                    <label>Présentation du poste en video :</label>
                                    <input type="file"  name="avatar" accept="video/mp4,video/x-m4v,video/*"  onChange={(e)=>{setJobPresentationVideo(e.target.files[0])}}/>
                                </div>

                            

                            </div>

                        </div>

                        {/* CALENDRIER */}
                        <div className="calendrier orientationV ">
                            <br></br>
                            <div>Merci de choisir un créneau de RDV afin de finaliser votre demande</div>

                            <Agenda
                                url={`https://calendly.com/${data.company_consultant_calendly}/30min`}
                            />
                            <div className="orientationH spaceBetween fromRight ">
                                <input className="button full mbem" type="submit" value="VALIDER" onClick={(e)=>{newJobPosting(e)}}/>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    )
}

export async function getServerSideProps({ query }) {
    let data=[]
    let europe_country=[]
    let departements=[]

    await axios.post(`${api}/getCompanyInfo`,{
        user_id:query.by,
    }).then((reponse)=>{
        data= reponse.data
    })


    await axios.get("https://restcountries.eu/rest/v2/region/europe?fields=name", {
        europe : europe_country
    }).then( (reponse)=>{
         europe_country = reponse.data
    })

    await axios.get("https://geo.api.gouv.fr/departements")
    .then( (reponse)=>{
        departements=reponse.data
    });

  
    data = await {...data,europe_country:europe_country,departements:departements}


    return {
      props: {
        data
      }
    }
}

