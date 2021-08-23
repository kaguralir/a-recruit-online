import React, { useState,useEffect } from 'react'
import cookie from 'cookie'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import Head from 'next/head'
import Header from '../../../../components/header/header'
import Footer from '../../../../components/footer/footer'
import Link from 'next/link'
import {Doughnut} from 'react-chartjs-2';

import DashboardIcon from '@material-ui/icons/Dashboard';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ReceiptIcon from '@material-ui/icons/Receipt';
import EuroIcon from '@material-ui/icons/Euro';
import BusinessIcon from '@material-ui/icons/Business';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';

import {api} from '../../../api/api'
import { Info } from '@material-ui/icons'


export default function gestionrecrutements({data}) {

    const [filter,setFilter]=useState("")
    const [alertPositif,setAlertPositif]=useState(false)
    const [alertNegatif,setAlertNegatif]=useState(false)
    const [largeur,setLargeur]=useState(2000);
    const [newProspect,setNewProspect]=useState(false)
    const [newCandidat,setNewCandidat]=useState(false)

    let state = {
        labels: [
            'Prospect',
            'Candidat',
            'Employeur'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [
                data.data.filter(info => info.origin.includes('Prospect')).length,
                data.data.filter(info => info.origin.includes('Candidat')).length,
                data.data.filter(info => info.origin.includes('Recruteur')).length,
            ],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    }


    useEffect(()=>{

        setLargeur(window.innerWidth);

        const changeWidth =()=>{

            setLargeur(window.innerWidth);
            
        }
        
        window.addEventListener('resize',changeWidth);
    
        //console.log(largeur)
        
        return()=>{
        
            window.removeEventListener('resize',changeWidth);
        
        }
    })

    const filterResults = (results, query) => {

        //console.log(results)
        if (!query) {
            return [];
        }
    
        return results.filter((result) => {
            const postName = result.name.toLowerCase();
            return postName.includes(query.toLowerCase());
        });

    };

    const filteredResult = filterResults(data.data,filter);
    //
    const [candidat_name,setcandidatName]=useState(false);
    const [candidat_firstname,setcandidatFirstName]=useState(false);
    const [candidat_email,setcandidatEmail]=useState(false);
    const [candidatPhoneNumber,setcandidatPhoneNumber]=useState(false);
    const [candidatAddress,setCandidatAddress]=useState(false);
    const [candidatCountry,setCandidatCountry]=useState(false);
    const [candidatDepartment,setCandidatDepartment]=useState(false);
    const [candidatCity,setCandidatCity]=useState(false);
    const [candidatZipCode,setCandidatZipCode]=useState(false);
    const generatePassWord=()=>{
        const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "0123456789";
        const symbols = "!@#$%^&*_-+=";
        const characters = symbols+alpha+numbers;
        let password = "";
        for (let i = 0; i < 8; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return password;
    }
    const createNewCandidat = (e)=>{

        e.preventDefault()

        const password = generatePassWord()

        axios.post(`${api}/signup`,{
                
            user_name:candidat_name,
            user_firstname:candidat_firstname,
            user_email:candidat_email,
            user_password:password,
            user_right:'candidat',

        }).then((result)=>{
            
            console.log("res : "+result.data.err)

            if(result.data.user_info){

                axios.post(`${api}/createFullUserInfo`,{//creer une centreprise à son nom

                    user_phone_number:candidatPhoneNumber,
                    user_address:candidatAddress,
                    user_department:candidatDepartment,
                    user_city:candidatCity,
                    user_zip_code:candidatZipCode,
                    user_country:candidatCountry,
                    user_id:result.data.user_info.user_id,
                    user_consultant_id:data.user.user_id,
                });

                setAlertPositif("Candidat crée avec succès")
                setNewCandidat(false)
                window.location.reload(true)
                
            }else {
                setAlertNegatif("Deja inscrit")
                setNewCandidat(false)
                window.location.reload(true)

            }
        });
    }

    const [company_representant__name,setcompany_representant_Name]=useState(false);
    const [company_representant__firstname,setcompany_representant_FirstName]=useState(false);
    const [company_representant__email,setcompany_representant_Email]=useState(false);
    const [company_representant_PhoneNumber,setcompany_representant_PhoneNumber]=useState(false);
    const [company_representant_Address,setcompany_representant_Address]=useState(false);
    const [company_representant_Country,setcompany_representant_Country]=useState(false);
    const [company_representant_Department,setcompany_representant_Department]=useState(false);
    const [company_representant_City,setcompany_representant_City]=useState(false);
    const [company_representant_ZipCode,setcompany_representant_ZipCode]=useState(false);
    const [company_name,setCompanyName]=useState("");
    const [company_address,setCompanyAddress]=useState("")
    const [company_headquarters,setCompanyHeadquarter]=useState("")
    const [company_rcs,setCompanyRcs]=useState("")
    const [company_representative_status,setCompanyRepresentativeStatut]=useState("");
    const [company_partnertype,setCompanyPartnerType]=useState("");

    const createNewProspect= (e)=>{

        e.preventDefault()

        const password = generatePassWord()

        axios.post(`${api}/signup`,{
                
            user_name:company_representant__name,
            user_firstname:company_representant__firstname,
            user_email:company_representant__email,
            user_password:password,
            user_right:'recruteur',

        }).then((result)=>{
            

            if(result.data.user_info){

                axios.post(`${api}/createFullUserInfo`,{//creer une centreprise à son nom

                    user_phone_number:company_representant_PhoneNumber,
                    user_address:company_representant_Address,
                    user_department:company_representant_Department,
                    user_city:company_representant_City,
                    user_zip_code:company_representant_ZipCode,
                    user_country:company_representant_Country,
                    user_id:result.data.user_info.user_id,
                    user_consultant_id:null,

                }).then((reponse)=>{
                    
                    axios.post(`${api}/createFullCompany`,{//creer une centreprise à son nom

                        company_name:company_name,
                        company_address:company_address,
                        company_representative_id:result.data.user_info.user_id,
                        company_representative_status:company_representative_status,
                        company_phone_number: company_representant_PhoneNumber,
                        company_headquarters:company_headquarters,
                        company_rcs: company_rcs,
                        is_partner:company_partnertype?true:false,
                        partner_type:company_partnertype,
                        consultant_id:data.user.user_id,
                        company_contrat:'prospect',
    
                    })

                    setAlertPositif("Prospect crée avec succès")
                    setNewCandidat(false)
                    window.location.reload(true)

                });
                
            }else {

                setAlertNegatif("Deja inscrit")
                setNewCandidat(false)
                window.location.reload(true)

            }
        });
    }


    return (
        <>
            <Head>
                <title>A recruit | Consultant</title>
            </Head>

            <div className="consultant">
                <Header>
                    {largeur<585 &&
                        <>
                        <li>
                            <Link href="/interface/consultant">
                                <a>
                                    <div className="center"><DashboardIcon/>&#160;Dashboard  </div>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/interface/consultant/boiteaoutils/gestionrecrutements">
                                <a className="locate">
                                    <div className="center"><HowToRegIcon/>&#160; Gestion recrutements  </div>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>
                                    <div className="center"><FolderSharedIcon/>&#160; CVthèque </div>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/interface/consultant/boiteaoutils/statistiques">
                                <a>
                                    <div className="center"><EqualizerIcon/>&#160; Statistiques </div>
                                </a>
                            </Link>
                        </li>
                        <li className="menu-menu"><a><div className="center"><EuroIcon/>&#160;Gestion Comptable</div></a>
                            <ul>
                                <li><Link href="/interface/consultant/boiteaoutils/gestioncomptable/factures"><a > <div className="center"><ReceiptIcon/>&#160; Factures </div></a></Link> </li>
                                <li><Link href="/interface/consultant/boiteaoutils/gestioncomptable/compteresultat"><a > <div className="center"><EuroIcon/>&#160; Compte Résultat </div></a></Link> </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/interface/consultant/boiteaoutils/placeaffaire">
                                <a> <div className="center"><BusinessIcon/>&#160; Place affaire </div></a>
                            </Link>
                        </li>
                        </>
                    }
                </Header>
                <div className="orientationH">
                    {alertPositif &&
                        <div className="alertPositif orientationH spaceBetween"><div className="alertText">{alertPositif}</div><div className="close" onClick={(e)=>{setAlertPositif(false)}}>x</div></div>
                    }
                    {alertNegatif &&
                        <div className="alertNegatif orientationH spaceBetween"><div className="alertText">{alertNegatif}</div><div className="close" onClick={(e)=>{setAlertNegatif(false)}}>x</div></div>
                    }
                    <div className="consultantBody orientationH">
                        {largeur>585 &&
                            <div className="menu">

                                <ul>
                                    <li>
                                        <Link href="/interface/consultant">
                                            <a>
                                                <div><DashboardIcon/>&#160;Dashboard  </div>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/interface/consultant/boiteaoutils/gestionrecrutements">
                                            <a className="locate">
                                                <div><HowToRegIcon/>&#160; Gestion recrutements  </div>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>
                                                <div><FolderSharedIcon/>&#160; CVthèque </div>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/interface/consultant/boiteaoutils/statistiques">
                                            <a>
                                                <div><EqualizerIcon/>&#160; Statistiques </div>
                                            </a>
                                        </Link>
                                    </li>
                                    <br></br>
                                    <div>Gestion Comptable</div>
                                    <div className="menu-menu">
                                        <li><Link href="/interface/consultant/boiteaoutils/gestioncomptable/factures"><a > <div><ReceiptIcon/>&#160; Factures </div></a></Link> </li>
                                        <li><Link href="/interface/consultant/boiteaoutils/gestioncomptable/compteresultat"><a > <div><EuroIcon/>&#160; Compte Résultat </div></a></Link> </li>
                                    </div>
                                    <br></br>
                                    <li>
                                        <Link href="/interface/consultant/boiteaoutils/placeaffaire">
                                            <a> <div><BusinessIcon/>&#160; Place affaire </div></a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        }

                        <div className="content w100">

                            <p className="consultant_title">{" >"} &#160; {"ESPACE DE GESTION DE RECRUTEMENT"}</p>
                            <div className="w100">

                                <div className="search_bar w100">
                                    <form onSubmit={(e)=>{e.preventDefault();}} role="search" className="w100">
                                        <input className="w100" id="search" type="search" placeholder="Prospect, Employeur, Candidat..." autoFocus autoComplete="off" required onChange={(e)=>{setFilter(e.target.value)}}/>
                                    </form>
                                    <ul>
                                        {filteredResult.map((result) => (
                                            <li key={result.id} className="result">
                                                <Link href="/interface/consultant/boiteaoutils/gestionrecrutements/employeur">
                                                    <a>
                                                        <div className="url">
                                                            {result.name+ " ( " + result.origin+" ) "}
                                                        </div>
                                                    </a>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="w90 orientationH">
                                    <div className="button" onClick={(e)=>{setNewProspect(true)}}>Nouveau prospect  &#160;<AddIcon/> </div>
                                    <div className="button" onClick={(e)=>{setNewCandidat(true)}}>Nouveau candidat  &#160;<AddIcon/> </div>
                                </div>
                                <div className="stats">
                                    <Doughnut
                                        data={state}
                                        options={{
                                            title:{
                                            display:true,
                                            text:'Average Rainfall per month',
                                            fontSize:20
                                            },
                                            legend:{
                                            display:true,
                                            position:'right'
                                            }
                                        }}
                                    />
                                </div>
                                <br></br>
                                {newProspect &&
                                    <div className="ovelay">
                                        <div className="container">
                                            <div className="container_title">
                                                <div>{" CRÉER UN NOUVEAU PROSPECT"}</div>
                                                <div className="close" onClick={(e)=>{setNewProspect(false)}}><CloseIcon/></div>
                                            </div>
                                            <form className=" w100">
                                                <div className="orientationV">
                                                    <span>Représentant : </span>
                                                    <input type="text" placeholder="Statut"/>
                                                    <div className="orientationH w100">
                                                        <input className="w100" type="text" placeholder="Nom" onChange={(e)=>{setcompany_representant_Name(e.target.value)}}/>
                                                        <input className="w100" type="text" placeholder="Prénom" onChange={(e)=>{setcompany_representant_FirstName(e.target.value)}}/>
                                                    </div>
                                                    <input type="text" placeholder="Email"/>
                                                    <div className="orientationH">
                                                        <input className="w100" type="text" placeholder="Téléphone" onChange={(e)=>{setcompany_representant_PhoneNumber(e.target.value)}}/>
                                                        <input className="w100" type="text" placeholder="Adresse" onChange={(e)=>{setcompany_representant_Address(e.target.value)}}/>
                                                    </div>
                                                    <div className="orientationH">
                                                        <div className="w100">
                                                            <input type="text" placeholder="Ville" list="city" autoComplete="off" onChange={(e)=>{setcompany_representant_City(e.target.value)}}/>
                                                            <datalist id="city">
                                                                {data.city.map((element, index) => {
                                                                    return <option key={index}>{element.user_city}</option>
                                                                })}
                                                            </datalist>
                                                        </div>
                                                        <input className="w100" type="text" placeholder="Code Postal" onChange={(e)=>{setcompany_representant_ZipCode(e.target.value)}}/>
                                                    </div>
                                                    <div className="orientationH">
                                                        <div className="w100 orientationV spaceBetween ">
                                                            <label>Pays :</label>
                                                            <select className="form_select" required onChange={(e)=>{setcompany_representant_Country(e.target.value)}}>
                                                                <option>--Pays--</option>
                                                                {data.europe_country.map((element, index) => {
                                                                    return <option key={index} value={element.name}>{element.name}</option>
                                                                })}
                                                            </select>
                                                        </div>  
                                                        <div className="w100 orientationV spaceBetween ">
                                                            <label>Departement :</label>
                                                            <select className="form_select" required onChange={(e)=>{setcompany_representant_Department(e.target.value)}}>
                                                                <option>--Departement--</option>
                                                                {data.departements.map((element, index) => {
                                                                        return <option key={index}>{element.nom}</option>
                                                                })}
                                                            
                                                            </select>
                                                        </div>                                                  
                                                    </div>
                                                    <br></br>
                                                    <span>Entreprise : </span>
                                                    <input type="text" placeholder="Entreprise" onChange={(e)=>{setCompanyName(e.target.value)}}/>
                                                    <input type="text" placeholder="Téléphone" onChange={(e)=>{setcompany_representant_PhoneNumber(e.target.value)}}/>
                                                    <input type="text" placeholder="Siège social" onChange={(e)=>{setCompanyHeadquarter(e.target.value)}}/>
                                                    <input type="text" placeholder="RCS" onChange={(e)=>{setCompanyRcs(e.target.value)}}/>
                                                    <label>&#160;&#160;<input type="checkbox" name="parteniar" onChange={(e)=>{setCompanyPartnerType(e.target.value)}}/>&#160; Partenaire commecial </label>
                                                    <label>&#160;&#160;<input type="checkbox" name="parteniar" onChange={(e)=>{setCompanyPartnerType(e.target.value)}}/>&#160; Partenaire école </label>

                                                    <div className="button ">
                                                        <input type="submit" value ="Enregistrer" onClick={(e)=>{createNewProspect(e)}}/>
                                                    </div>
                                            
                                                </div>
                                            
                                            </form>
                                        </div>
                                    </div>
                                }
                                {newCandidat &&
                                    <div className="ovelay">
                                        <div className="container">
                                            <div className="container_title">
                                                <div>{" CRÉER UN NOUVEAU CANDIDAT"}</div>
                                                <div className="close" onClick={(e)=>{setNewCandidat(false)}}><CloseIcon/></div>
                                            </div>
                                            <form className=" w100" >
                                                <div className="orientationV">
                                                <input type="text" placeholder="Nom" onChange={(e)=>{setcompany_representant_Name(e.target.value)}}/>
                                                <input type="text" placeholder="Prénom" onChange={(e)=>{setcandidatFirstName(e.target.value)}}/>
                                                <input type="text" placeholder="Adresse" onChange={(e)=>{setCandidatAddress(e.target.value)}}/>
                                                <div className=" w100 orientationH spaceBetween ">
                                                    <div className="w100 orientationV spaceBetween ">
                                                        <label>Pays :</label>
                                                        <select className="form_select" required onChange={(e)=>{setCandidatCountry(e.target.value)}}>
                                                            <option>--Pays--</option>
                                                            {data.europe_country.map((element, index) => {
                                                                return <option key={index} value={element.name}>{element.name}</option>
                                                            })}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className=" w100 orientationV spaceBetween ">
                                                    <div className="w100 orientationV spaceBetween ">
                                                        <label>Departement :</label>
                                                        {data.departements.length!==0 ?
                                                            <select className="form_select" required onChange={(e)=>{setCandidatDepartment(e.target.value)}}>
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
                                                <input type="text" placeholder="Ville" list="city" autoComplete="off" onChange={(e)=>{setCandidatCity(e.target.value)}}/>
                                                <datalist id="city">
                                                    {data.city.map((element, index) => {
                                                        return <option key={index}>{element.user_city}</option>
                                                    })}
                                                </datalist>
                                                <input type="text" placeholder="Code Postal" onChange={(e)=>{setCandidatZipCode(e.target.value)}}/>
                                                <input type="text" placeholder="Téléphone"onChange={(e)=>{setcandidatPhoneNumber(e.target.value)}}/>
                                                <input type="text" placeholder="Email" onChange={(e)=>{setcandidatEmail(e.target.value)}}/>
                                                    <div className="button ">
                                                        <input type="submit" value ="Enregistrer" onClick={(e)=>{createNewCandidat(e)}}/>
                                                    </div>
                                                </div>
                                            
                                            </form>
                                        </div>
                                    </div>
                                }
                                
                            </div>
                        </div>
                    </div>
                        
                </div>
            </div>
        </>
    )
    
}

export async function getServerSideProps({ req }) {
    
    const user_cookie = cookie.parse(req ? req.headers.cookie || "" : document.cookie)
    
    if(user_cookie.me){
        
        const user = jwt_decode(JSON.stringify(user_cookie))
        let data=[]
        let europe_country=[]
        let departements=[]
        let city=[]

        await axios.post(`${api}/getConsultantAfiliate`,{
            consultant_id:user.user_id,
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

        await axios.post(`http://localhost:3080/getCity`)
        .then( (reponse)=>{
            city=reponse.data
        });

        data = await {user:user,data:data,europe_country:europe_country,departements:departements,city:city}

        //console.log(data)

        return {
            props: {
                data
            }
        }
    }

    return {
        redirect: {
            permanent: false,
            destination: "/auth/login?dest=consultant/boiteaoutils",
        },
        props:{message:"redirect"},
    }
}
