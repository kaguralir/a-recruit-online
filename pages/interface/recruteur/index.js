import React ,{useState,useEffect,Component}from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../../../components/header/header'
import Footer from '../../../components/footer/footer'
import ShowOrHideLayout from '../../../components/layouts/show_hide_layout'
import WrapListLayout from '../../../components/layouts/wrap_list_layout'
import Agenda from '../../../components/others/agenda'
import Axios from 'axios'
import jwt_decode from 'jwt-decode'
import ReactLocalStorage  from 'reactjs-localstorage'
import BigSizeScreenNotif from '../../../components/notification/bigSizeScreenNotif'
import Image from 'next/image'
import {api} from '../../api/api'


export default class index extends Component {

    state={

        //Initial state
        api : api,
        user : [],
        company_info:[],
        company_fillededJobs:[],
        company_unFilledJobs:[],
        europe_country:[],
        departments:[],
        consultants:[],
        consultant_calendly:"",
        //New job 
        diplomes : ['CAP', 'BEP', 'BAC', 'BTS/DUT', 'Licence', 'Master1', 'Master2', 'Doctorat'],
        niveauEtudes : ['BAC', 'BAC+1', 'BAC+2', 'BAC+3', 'BAC+4', 'BAC+5', 'BAC+6', 'BAC+7', 'BAC+8'],
        experience : ['débutant', '1 an à 2 ans', '2 ans à 3 ans', '3 ans à 4 ans', '4 ans à 5 ans' , '5 ans et plus (Senior)'],
  
    }

    componentDidMount(){

        //Recupérer les informations sur l'utilisateur
        let user=[];
        const  localdata= ReactLocalStorage.reactLocalStorage.getObject('jwt')
        user=jwt_decode(JSON.stringify(localdata)) 
        this.setState({user:user})

        ///Chargement des donnéés concernant l'utilisateur*

        Axios.post(`${this.state.api}/getCompanyInfo`,
        {
            user_id:user.user_id,

        }). then( (reponse)=>{

            this.setState({company_info:reponse.data});

            if(reponse.data.company_id){

                if(reponse.data.company_country==="France"){
                    Axios.get("https://geo.api.gouv.fr/departements")
                    .then((reponse)=>{
                        this.setState({company_department:reponse.data})
                    });
                }

                Axios.post(`${this.state.api}/getUnFillededJobLimit4`,
                {
                    company_id:reponse.data.company_id 
                }).then((reponse)=>{
                    this.setState({company_unFilledJobs:reponse.data})
                })

                Axios.post(`${this.state.api}/getFillededJobLimit4`,
                {
                    company_id:reponse.data.company_id
                }).then((reponse)=>{
                    this.setState({company_fillededJobs:reponse.data})
                })

                Axios.post(`${this.state.api}/getConsultantByDepartment`,
                {
                    company_department:reponse.data.company_department
                }).then((reponse)=>{
                    this.setState({consultants:reponse.data});
                })

                ///Chargement des données régionnaux pour les formulaires
        
                Axios.get("https://restcountries.eu/rest/v2/region/europe?fields=name", {
                    europe : this.state.europe_country
                }).then( (reponse)=>{ 
                    this.setState({europe_country:reponse.data})
                })
        
                Axios.post(`${this.state.api}/getConsultantCalendly`,{
                    consultant_id:reponse.data.consultant_id
                }).then( (reponse)=>{
                    this.setState({consultant_calendly:`https://calendly.com/${reponse.data.user_calendly}/30min`})
                })
            }
        
        })
    }

    loadDepartment =  (coutry) =>  {
        if(coutry==="France" ){
            Axios.get("https://geo.api.gouv.fr/departements")
            .then( (reponse)=>{
                setDepartments(reponse.data)
            });
        }
    }

    loadCity = (code) => {
        Axios.get(`https://geo.api.gouv.fr/departements/${code}/communes`)
        .then((reponse)=>{
            villes = reponse.data
        })
    }
    
      

    render() {

        /* MENUS DEROULANTS  */ 
            var show_hide2=false;
            const setShow_hide2 = (value)=>{
                show_hide2=value
            }
            var show_hide3=false;
            const setShow_hide3 = (value)=>{
                show_hide3=value
            }        /* FIN MENU DEROULANT */  
        return (
            <div className="recruteur">

                <div className="interface-layout">
                    <Head>
                        <title>A recruit | Recruteur</title>
                        <meta name="description" content="Generated by create next app" />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    {/*---------------*/}
                    <Header
                        callback = {()=>{setShow_hide3(!show_hide3);}}
                    />
                    {/*---------------*/}
                    
                    <main className="body">
                        <div className="recutor-left">
                            
                            <div className="recrutor-help">
                                <span>Conseils pratiques</span>
                                <div className="recrutor-consultant">
                                    
                                    <Image className="recrutor-consultant-img" src ="/images/creer_offre.jpg" width={150} height = {150}/>
                                    <Link href="#">
                                        <a>
                                        {"Créer l'offre d'emploie"}
                                        </a>
                                    </Link>
                                </div>
                                <div className="recrutor-consultant">
                                
                                    <Image className="recrutor-consultant-img" src ="/images/creer_presentation.jpg" width={150} height = {150}/>
                                    <Link href="#">
                                        <a>
                                            {"Créer une présentation"}
                                        </a>
                                    </Link>
                                </div>
                                
                            </div>
                        </div>
                        <div className="recrutor-right">

                            <div className="company_info">
                                <Image className="company_logo" src ="/images/partner/partner_audi.svg" width={200} height={200}/>
                                <div className= "company">
                                    <div>
                                        <div><span>{this.state.company_info.company_name}</span></div>
                                        <div>{this.state.company_info.company_rcs}</div>
                                        <div>{this.state.company_info.company_headquarters}</div>
                                        <div>{this.state.company_info.company_address}</div>
                                        <div>{this.state.company_info.company_zip_code}</div>
                                        <div>{this.state.company_info.company_city}</div>
                                        <div>{this.state.company_info.company_department}</div>
                                        <div>Tel :{this.state.company_info.company_phone_number}</div> 

                                    </div>
                                    <div className="recrutor-consultant">

                                        <span>Mon conseiller A RECRUIT</span>
                                        <p>M. Zinedine Piro</p>
                                        <div>
                                            <Image className="recrutor-consultant-img" src ="/images/zinedine.png" width={100} height = {100}/>
                                        </div>
                                        <Link href="#">
                                            <a>
                                                Vers page A RECRUIT
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                           
                            {/* ZONE FAIRE MA DEMANDE */}
                            <div className="show_hide_layout orientationH spaceBetween center demandes_link">
                                <div className="w100 orientationH spaceBetween center"><label className="label">FAIRE MA DEMANDE</label></div>
                                <div className="orientationH ">
                                    <Link href="#new_demande">
                                        <a onClick={()=>setShow_hide2(true)}> <div className="button full">DEMANDE EN LIGNE</div></a>
                                    </Link>
                                    <Link href="/">
                                        <a> <div className="button full">PRENDRE RENDEZ-VOUS AVEC UN CONSEILLER</div></a>
                                    </Link>
                                </div>

                            </div>

                            {/* DEMANDE EN COURS */}
                            <WrapListLayout
                                title= "DEMANDES EN COURS ..............."
                                linkForMore=""
                            >
                                {this.state.company_unFilledJobs.length!==0 ? this.state.company_unFilledJobs.map((job, index) => {
                                    return (
                                        <div className="demande" key={index}>
                                            <div className="w100 orientationH">
                                                <div className="demande_left w100">
                                                    <label>{job.job_title}</label>
                                                    <div className="w100"><label>Crée le :</label><label>{job.created_at}</label></div>
                                                    <div className="w100"><label>Retenue  : </label>{job.job_hire}</div>
                                                </div>
                                                <div className="demande_right orientationV spaceBetween">
                                                    <img title="Modifier" src="/images/icon_edit_white.png" className= "smallIcon"/>
                                                    <img title="Supprimer" src="/images/icon_delete_white.png" className= "smallIcon" onClick={()=>{deletejob(job.job_id)}}/>
                                                </div>

                                            </div>
                                        </div>
            
                                        
                                    );
                                })
                                : <div>AUCUNE DEMANDE EN COURS</div>}
                                {this.state.company_unFilledJobs.length === 4 && <Link  href={{pathname:"/interface/recruteur/allJobs",query:{dest:"unfilled",company_id:this.state.company_info.company_id}}}>
                                    <a>
                                        <div className="show_more">voir plus {">>"}</div>
                                    </a>
                                </Link>}
                            
                            
                            </WrapListLayout>
                            

                            {/*MES DEMANDE*/}
                            <WrapListLayout
                                title= "DERNIÈRES DEMANDES "
                                linkForMore=""
                            >
                            {this.state.company_fillededJobs.length!==0 ? company_fillededJobs.map((job, index) => {
                                    return (
                                        <div className="demande" key={index}>
                                            <label>{job.job_title}</label>
                                            <div><label>Crée le :</label> {job.created_at}</div>
                                            <div><label>Retenue  : </label>{" "+ job.job_hire}</div>
                                        </div>                      
                                    );
                                })
                                : <div></div>}
                                    
                                <div className="demande more orientationV center">
                                    <Link  href="#new_demande">
                                        <a className="center orientationV" onClick={()=>setShow_hide2(true)} >
                                            <div className="more_btn center">+</div>
                                            Ajouter un poste
                                        </a>
                                    </Link>
                                </div>
                                {this.state.company_fillededJobs.length === 4 && <Link  href={{pathname:"/interface/recruteur/allJobs",query:{dest:"filled",company_id:this.state.company_info.company_id}}}>
                                    <a>
                                        <div className="show_more">voir plus {">>"}</div>
                                    </a>
                                </Link>}
                            </WrapListLayout>
                            
                            {/* NOUVELLE DEMANDE FORMULAIRE */}
                            <ShowOrHideLayout
                                title = "NOUVELLE OFFRE D'EMPLOI"
                                show_hide = {show_hide2}
                                callback = {(e)=>setShow_hide2(e)}
                            >
                                <div id="new_demande">
                                    <div className="new_demande underline orientationH spaceBetween w100">
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
                                                        {this.state.europe_country.map((element, index) => {
                                                            return <option key={index} value={element.name}>{element.name}</option>
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="register_todo w100 orientationH spaceBetween center">
                                                <div className="w100 orientationH spaceBetween center">
                                                    <label>Departement :</label>
                                                    {this.state.departments.length!==0 ?
                                                        <select className="form_select" required onChange={(e)=>{setJobDepartment(e.target.value)}}>
                                                            <option>--Departement--</option>
                                                            {departments.map((element, index) => {
                                                                    return <option key={index}>{element.nom}</option>
                                                            })}
                                                        
                                                        </select>
                                                    :                                
                                                    <input placeholder={this.state.company_info.company_department? this.state.company_info.company_department : "..."}type="text" name="ent_name"  onChange={(e)=>{setCompanyDepartment(e.target.value)}}/> 
                                                }
                                                </div>
                                            </div>
                                            <div className="register_todo w100 orientationH spaceBetween center">
                                                <div className="w100 orientationH spaceBetween center">
                                                    <label>Diplôme requis :</label>
                                                    <select className="form_select" required onChange={(e)=>{setJobRequiredGrade(e.target.value)}}>
                                                        <option>--Choix--</option>
                                                        {this.state.diplomes.map(diplomes => (
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
                                                        {this.state.niveauEtudes.map(niveauEtudes => (
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
                                                        {this.state.experience.map(experience => (
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

                                        {/* CALENDRIER */}
                                        <div className="calendrier orientationV w100">
                                            <br></br>
                                            <div>Merci de choisir un créneau de RDV afin de finaliser votre demande</div>

                                            <Agenda
                                                url={this.state.consultant_calendly}
                                            />
                                        </div>

                                    </div>
                                    <div className="orientationH spaceBetween fromRight ">
                                        <input className="button full mbem" type="submit" value="VALIDER" onClick={(e)=>{newJobPosting(e)}}/>
                                    </div>

                                </div>

                            </ShowOrHideLayout>
                        
                            <BigSizeScreenNotif
                                showHide = {show_hide3}
                                callback = {()=>{setShow_hide3(!show_hide3)}}
                            />
                        </div>

                    </main>

                    {/*---------------*/}
                    <Footer/>

                </div>
            </div>
        )
    }
}


