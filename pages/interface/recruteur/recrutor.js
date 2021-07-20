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



export default function recrutor(){

    const api = "https://blooming-crag-03737.herokuapp.com"


    const loaded_file = (e,result) => {

        const file = e.target.files[0];

        return new Promise((resolve, reject) => {

            const reader = new FileReader();

            reader.onload = (e) => {

                let data =  e.target.result
                
                resolve({fileName: file.name,buffer:data});// retourne le nom du fichier chargé et le contenu sous format text base64
            };

            reader.onerror = (err) => {
                reject(err);
            };

            reader.readAsDataURL(file);
            
        });
    }

    const [reload, setReload]=useState(false)
    /* DONNÉES PRINCIPALES */

        const [europe_country,setEuropeCountry] = useState([]);
        const [departments,setDepartments]= useState([]);
        const [company_info,setCompanyInfo] = useState([]);
        const [company_fillededJobs,setCompanyFilledeJobs] = useState([]);
        const [company_unFilledJobs,setCompanyUnfillededJobs] = useState([]);

        const [consultants,setConsultant] = useState([])


        useEffect(() => {

            const  localdata= ReactLocalStorage.reactLocalStorage.getObject('jwt')
            
            const  loded_user = jwt_decode(JSON.stringify(localdata)) 
        
            ///Chargement des données régionnaux pour les formulaires

            Axios.get("https://restcountries.eu/rest/v2/region/europe?fields=name", {europe : europe_country})
            .then( (reponse)=>{ setEuropeCountry(reponse.data)} )


            //console.log(loded_user.user_id)
            ///Chargement des donnéés concernant l'utilisateur

            Axios.post(`${api}/getCompanyInfo`,
            {
                user_id:loded_user.user_id

            }). then( (reponse)=>{

                setCompanyInfo(reponse.data)

                if(reponse.data.company_id){
        
                    Axios.post(`${api}/getUnFillededJobLimit4`,{company_id:reponse.data.company_id }).
                    then( (reponse)=>{setCompanyUnfillededJobs(reponse.data)})
                    Axios.post(`${api}/getFillededJobLimit4`,{company_id:reponse.data.company_id}).
                    then( (reponse)=>{setCompanyFilledeJobs(reponse.data)})
                    Axios.post(`${api}/getConsultantByDepartment`,{company_department:reponse.data.company_department}).
                    then( (reponse)=>{setConsultant(reponse.data)})
                }
            
            })

        }, [reload])

        //Recupérer le calendly du consultant de l'entreprise

        const [url,setUrl]=useState("")

        useEffect(() => {
            Axios.post(`${api}/getConsultantCalendly`,{consultant_id:company_info.consultant_id}).
            then( (reponse)=>{setUrl(`https://calendly.com/${reponse.data.user_calendly}/30min`)})
            
        }, [company_info.consultant_id])


        const loadConsultant = (department)=>{
            Axios.post(`${api}/getConsultantByDepartment`,{company_department:department}).
            then( (reponse)=>{setConsultant(reponse.data)})
        }

        //Chargement des départements  et des villes :

        let cities =[];

        const  loadDepartment =  (coutry) =>  {
            if(coutry==="France" ){
                Axios.get("https://geo.api.gouv.fr/departements")
                .then( (reponse)=>{setDepartments(reponse.data)});
            }
        }

        const loadCity = (code) => {

        Axios.get(`https://geo.api.gouv.fr/departements/${code}/communes`)
        .then((reponse)=>{villes = reponse.data})
        console.log({"villes" : villes})
        }

        
    /* FIN */

        

    /* DEBUT : FORMULAIRES */

        const diplomes = ['CAP', 'BEP', 'BAC', 'BTS/DUT', 'Licence', 'Master1', 'Master2', 'Doctorat'];
        const niveauEtudes = ['BAC', 'BAC+1', 'BAC+2', 'BAC+3', 'BAC+4', 'BAC+5', 'BAC+6', 'BAC+7', 'BAC+8'];
        const experience = ['débutant', '1 an à 2 ans', '2 ans à 3 ans', '3 ans à 4 ans', '4 ans à 5 ans' , '5 ans et plus (Senior)'];
        useEffect(()=>{},[reload])

    /* FIN */

    /* DEBUT : Formulair 1 ( TERMINER L'INSCRIPTION) */

        //DECLARATION
        let company_id=company_info.company_id;
        const [company_name,setCompanyName]=useState(company_info.company_name);
        const [company_nationality, setCompanyNationality]=useState(company_info.company_nationality);
        const [company_representative_status, setCompanyRepresentativeStatus]=useState(company_info.company_representative_status);
        const [company_rcs, setCompanyRcs]=useState(company_info.company_rcs);
        const [company_headquarters, setCompanyHeadquarters]=useState(company_info.company_headquarters);
        const [company_zip_code, setCompanyZipCode]=useState(company_info.company_zip_code);
        const [company_address, setCompanyAddress]=useState(company_info.company_address);
        const [company_department, setCompanyDepartment]=useState(company_info.company_department);
        const [company_phone_number, setCompanyPhoneNumber]=useState(company_info.company_phone_number);
        const [company_city, setCompanyCity]=useState(company_info.company_city);
        const [company_country, setCompanyCountry]=useState(company_info.company_country);
        const [is_partner, setIsPartner]=useState(company_info.is_partner);
        const [partner_type, setPartnerType]=useState(company_info.partner_type);
        const [consultant_id, setConsultantId]=useState(company_info.consultant_id);
        //Fichiers
        const [company_presentation_pdf,setCompanyPresentationPdf] = useState(company_info.company_presentation_pdf)
        const [company_presentation_video,setCompanyPresentationVideo] = useState(company_info.company_presentation_pdf)
        //Variables de changement 
        const [alterCompanyPresentationPdf,setAlterCompanyPresentationPdf]=useState(false)
        const [alterCompanyPresentationVideo,setAlterCompanyPresentationVideo]=useState(false)
        //Fonction de chargement associés
        const loadCompanyPresentationPdf = (e)=>{
            //recupèrer le nom du fichier chargé et son contenu grâce à la fonction loaded_file
            loaded_file(e).then((result)=>{
                //dest : représente le dossier de stockage du fichier sur aws
                //identifier : permet d'identifier l'origine du fichier au niveau de l'api. NB : le nom doit être identique au nom de la variable ; de préference XD
                setCompanyPresentationPdf({new:{...result,id:company_id,dest:`company`,identifier:'company_presentation_pdf'}})
            })
        }

        //MISE A JOUR AU CHARGEMENT DE LA PAGE
        useEffect(() => {

            if(company_info.company_country==="France"){
                Axios.get("https://geo.api.gouv.fr/departements")
                .then( (reponse)=>{setDepartments(reponse.data);});
            }

            company_id=company_info.company_id;
            setCompanyName(company_info.company_name);
            setCompanyNationality(company_info.company_nationality);
            setCompanyRepresentativeStatus(company_info.company_representative_status);
            setCompanyRcs(company_info.company_rcs);
            setCompanyHeadquarters(company_info.company_headquarters);
            setCompanyZipCode(company_info.company_zip_code);
            setCompanyAddress(company_info.company_address);
            setCompanyDepartment(company_info.company_department);
            setCompanyPhoneNumber(company_info.company_phone_number);
            setCompanyCity(company_info.company_city);
            setCompanyCountry(company_info.company_country);
            setIsPartner(company_info.is_partner);
            setPartnerType(company_info.partner_type);
            setConsultantId(company_info.consultant_id);
            setCompanyPresentationPdf(company_info.company_presentation_pdf);
            setCompanyPresentationVideo(company_info.company_presentation_video);
            
        }, [company_info])

        //FONCTION DE MISE A JOUR DES INFOS SUR L'ENTREPRISE

        const  finalization = (e) => {

            e.preventDefault();
        
            if(!company_presentation_video.new){
     
                Axios.post(`${api}/updateCompanyInfo`,{
                     company_id:company_id,
                     company_name:company_name,
                     company_nationality:company_nationality,
                     company_representative_status:company_representative_status,
                     company_rcs:company_rcs,
                     company_address:company_address,
                     company_department:company_department,
                     company_phone_number:company_phone_number,
                     company_headquarters:company_headquarters,
                     company_zip_code:company_zip_code,
                     company_city:company_city,
                     company_country:company_country,
                     is_partner:is_partner,
                     partner_type:partner_type,
                     consultant_id:consultant_id,
                     company_presentation_pdf:company_presentation_pdf,
                     company_presentation_video:company_presentation_video
     
                 }).then((resutlt)=>{

                    if(resutlt.data){
                        console.log(resutlt.data)
                        window.location.reload(true)
                    }else {
                          Alert("Une erreur s'est produite veuillez revérier tout les champs et réessayez")
                    }
                 });
             }
             setShow_hide1(false)
     
        }
         
        //Verifier si les infos sur l'entreprise sont tous données

        var register_todo = "A TERMINER";

        if(company_name=== "false" || company_nationality=== "false" || company_phone_number=== "false" || company_headquarters=== "false" || company_address=== "false" || company_department=== "false" || company_city
        === "false" || company_rcs=== "false" || company_zip_code=== "false" || company_country=== "false" || company_representative_status==="false" || !company_name|| !company_nationality|| !company_phone_number|| !company_headquarters|| !company_address|| !company_department|| !company_city
        || !company_rcs|| !company_zip_code|| !company_country|!company_representative_status ){

                register_todo = "A TERMINER";

        }else{
            register_todo = "TERMINÉ";
        }

    /* FIN */
               

    /*DEBUT : FORMULAIRE 2 AJOUT D'UNE  DEMANDE D'OFFRE D'EMPLOIE */

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

        const deletejob = (id)=>{


            if(confirm("Voulez-vous vraiment supprimer cette offre ?")){
                if(confirm("Cette oppération est irréversible "))

                Axios.post(`${api}/deleteJob`,{
                        
                    job_id:id

                }).then((result)=>{
                    
                    if(!result.err){
                        window.location.reload(true)
                    }else {
                        alert("Une erreur s'est produite pendant la suppression")
                    }
                });
            }
        }

    /* FIN */



    /* MENUS DEROULANTS  */
        
        //Ancre ( pour ouvir et fermer les formulaires déroulant)
        const [show_hide1, setShow_hide1] =useState("");
        const [show_hide2, setShow_hide2] =useState(false);

        const [show_hide3, setShow_hide3] =useState(false);


    /* FIN MENU DEROULANT */    


    return (
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

                <ShowOrHideLayout
                    title = "TERMINER L'INSCRIPTION DE MON ENTREPRISE"
                    statut = {register_todo}
                    show_hide = {show_hide1}
                    callback = {(state)=>setShow_hide1("")}
                >
                    
                    <div className="register_todo_container">
                        <div className="underline register_todo w100 orientationH spaceBetween center">
                             <div className="w100 orientationH spaceBetween center">
                                <label>Nom de l'entreprise :</label>
                                <input placeholder={company_info.company_name ? company_info.company_name : "..."} type="text" name="ent_name"  onChange={(e)=>{setCompanyName(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="register_todo w100 orientationH spaceBetween center">
                             <div className="w100 orientationH spaceBetween center">
                                <label>Pays :</label>
                                <select className="form_select"  onChange={(e)=>{setCompanyCountry(e.target.value);loadDepartment(e.target.value)}}>
                                    {europe_country.map((element, index) => {
                                        if(company_info.company_country && element.name===company_info.company_country){
                                            return <option className="option-selected" selected key={index} value={element.name}>{element.name}</option>
                                        }else{
                                            return <option key={index} value={element.name}>{element.name}</option>
                                        }
                                    })}
                                </select>
                            </div>
                        </div> 
                        <div className="register_todo w100 orientationH spaceBetween center">
                             <div className="w100 orientationH spaceBetween center">
                                <label>Département :</label>
                                {(departments.length!==0 || company_info.company_department)? 
                                    <select className="form_select"  onChange={(e)=>{setCompanyDepartment(e.target.value);loadConsultant(e.target.value)}}>
                                        <option>Selectionnez un departement</option>

                                        {departments.map((element, index) => {
                                                if(company_info.company_department && element.nom===company_info.company_department){
                                                    return <option className="option-selected" selected key={index}>{element.nom}</option>
                                                }else{
                                                    return <option key={index}>{element.nom}</option>
                                                }
                                            })}
                                            
                                    </select>
                                :                                
                                <input placeholder={company_info.company_department? company_info.company_department : "..."}type="text" name="ent_name"  onChange={(e)=>{setCompanyDepartment(e.target.value)}}/> 
                            }

                            </div>
                            
                        </div>
                        <div className="register_todo w100 orientationH spaceBetween center">
                             <div className="w100 orientationH spaceBetween center">
                                <label>Adresse :</label><input placeholder={company_info.company_address ? company_info.company_address : "..."} type="text" name="ent_name"  onChange={(e)=>{setCompanyAddress(e.target.value)}}/>
                            </div>      
                        </div>
                        <div className="register_todo w100 orientationH spaceBetween center">
                             <div className="w100 orientationH spaceBetween center">
                                <label>Ville :</label><input placeholder={company_info.company_city ? company_info.company_city : "..."} type="text" name="ent_name"  onChange={(e)=>{setCompanyCity(e.target.value)}}/>
                            </div>
                            
                        </div>
                        <div className="register_todo w100 orientationH spaceBetween center">
                             <div className="w100 orientationH spaceBetween center">
                                <label>Code postal :</label><input placeholder={company_info.company_zip_code ? company_info.company_zip_code : "..."} type="text" name="ent_name"  onChange={(e)=>{setCompanyZipCode(e.target.value)}}/>
                            </div> 
                        </div>
                        <div className="register_todo w100 orientationH spaceBetween center">
                             <div className="w100 orientationH spaceBetween center">
                                <label>Nationalité de l'entreprise :</label>
                                <input placeholder={company_info.company_nationality? company_info.company_nationality: "..."}type="text" name="ent_name"  onChange={(e)=>{setCompanyNationality(e.target.value)}}/>
                            </div>      
                        </div>
                        <div className="register_todo w100 orientationH spaceBetween center">
                             <div className="w100 orientationH spaceBetween center">
                                <label>Siège social :</label><input placeholder={company_info.company_headquarters ? company_info.company_headquarters : "..."}type="text" name="ent_name"  onChange={(e)=>{setCompanyHeadquarters(e.target.value)}}/>
                            </div>
                            
                        </div>
                        <div className="register_todo w100 orientationH spaceBetween center">
                             <div className="w100 orientationH spaceBetween center">
                                <label>RCS + Ville :</label><input placeholder={company_info.company_rcs ? company_info.company_rcs : "..."} type="text" name="ent_name"  onChange={(e)=>{setCompanyRcs(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="register_todo w100 orientationH spaceBetween center">
                             <div className="w100 orientationH spaceBetween center">
                                <label>Qualité du signataire :</label>
                                <input placeholder={company_info.company_representative_status ? company_info.company_representative_status : "..."} type="text" name="ent_name"  onChange={(e)=>{setCompanyRepresentativeStatus(e.target.value)}}/>
                            </div>                         
                        </div>
                        <div className="register_todo w100 orientationH spaceBetween center">
                             <div className="w100 orientationH spaceBetween center">
                                <label>Tel :</label><input placeholder={company_info.company_phone_number ? company_info.company_phone_number : "..."} type="text" name="ent_name"  onChange={(e)=>{setCompanyPhoneNumber(e.target.value)}}/>
                            </div>        
                        </div>
                        <div className="register_todo w100 orientationH spaceBetween center">
                             <div className="w100 orientationH spaceBetween center">
                                <label>Consultant :</label>
                                <select className="form_select" required onChange={(e)=>{setConsultantId(e.target.value)}}>
                                    <option>Choisir mon consultant</option>

                                    {consultants.map((element, index) => {
                                            if(company_info.consultant_id && element.user_id===company_info.consultant_id){
                                                return <option className="option-selected" value={element.user_id} selected key={index}>{element.user_name}</option>
                                            }else{
                                                return <option key={index} value={element.user_id}>{element.user_name}</option>
                                            }
                                    })}
                                        
                                </select>

                            </div>
                            
                        </div>
                        <br></br>
                        <div className="register_todo file w100 orientationH spaceBetween ">
                            <label>Présentation de l'entreprise en pdf :</label>
                            {(company_info && company_info.company_presentation_pdf  && !alterCompanyPresentationPdf)?

                                <div className="file_preview orientationH center spaceBetween">
                                    <div className="pdf_view_icon" title="Ouvrir">Présentation PDF</div>
                                    <div className="simpleButton center" onClick={()=>{setAlterCompanyPresentationPdf(true)}}>Modifier</div>
                                </div>
                            :
                                 <div className="  orientationH">
                                     <input className="file_input" type="file"  name="avatar" accept="application/pdf,application/vnd.ms-excel" onChange={(e)=>{loadCompanyPresentationPdf(e)}}/>
                                    {(company_info && company_info.company_presentation_pdf)&&
                                        <div className="simpleButton center" onClick={()=>{setAlterCompanyPresentationPdf(false)}}>Annuler</div>
                                    }
                                </div>
                            }
                        </div>

                        <div className="register_todo  file w100 orientationH spaceBetween  ">
                            <label>Présentation de l'entreprise en video :</label>
                            {(company_info && company_info.company_presentation_video && !alterCompanyPresentationVideo)?

                                <div className="file_preview orientationH  spaceBetween">
                                    <div className="video_view_icon" title="Ouvrir">Présentation VIDEO</div>
                                    <div className="simpleButton center" onClick={()=>{setAlterCompanyPresentationVideo(true)}}>Modifier</div>
                                </div>
                            :
                                <div className=" orientationH">
                                    <input className="file_input" type="file"  name="avatar" accept="video/mp4,video/x-m4v,video/*" onChange={(e)=>{setCompanyPresentationVideo(e.target.value)}}/>
                                    {(company_info && company_info.company_presentation_video)&&
                                        <div className="simpleButton center" onClick={()=>{setAlterCompanyPresentationVideo(false)}}>Annuler</div>
                                    }
                                </div>
                            }
                        </div>
                        
                        {
                        register_todo === "A TERMINER"?
                            <div className="orientationH spaceBetween fromRight ">
                                <input type="submit" value="VALIDER" className="button full mbem" onClick={(e)=>{finalization(e)}}/>
                            </div>
                        :     
                        <div className="orientationH spaceBetween fromRight ">
                            <input type="submit" value="MODIFIER" className="button full mbem" onClick={(e)=>{finalization(e)}}/>
                        </div>                 
                        }
                    </div>
                </ShowOrHideLayout>
                

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
                    {company_unFilledJobs.length!==0 ? company_unFilledJobs.map((job, index) => {
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
                    {company_unFilledJobs.length === 4 && <Link  href={{pathname:"/interface/recruteur/allJobs",query:{dest:"unfilled",company_id:company_info.company_id}}}>
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
                   {company_fillededJobs.length!==0 ? company_fillededJobs.map((job, index) => {
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
                    {company_fillededJobs.length === 4 && <Link  href={{pathname:"/interface/recruteur/allJobs",query:{dest:"filled",company_id:company_info.company_id}}}>
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
                                            {europe_country.map((element, index) => {
                                                return <option key={index} value={element.name}>{element.name}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className="register_todo w100 orientationH spaceBetween center">
                                     <div className="w100 orientationH spaceBetween center">
                                        <label>Departement :</label>
                                        {departments.length!==0 ?
                                            <select className="form_select" required onChange={(e)=>{setJobDepartment(e.target.value)}}>
                                                <option>--Departement--</option>
                                                {departments.map((element, index) => {
                                                        return <option key={index}>{element.nom}</option>
                                                })}
                                            
                                            </select>
                                         :                                
                                         <input placeholder={company_info.company_department? company_info.company_department : "..."}type="text" name="ent_name"  onChange={(e)=>{setCompanyDepartment(e.target.value)}}/> 
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

                            {/* CALENDRIER */}
                            <div className="calendrier orientationV w100">
                                <br></br>
                                <div>Merci de choisir un créneau de RDV afin de finaliser votre demande</div>

                                <Agenda
                                    url={url}
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

            </main>

            {/*---------------*/}
            <Footer/>

        </div>
    )
}

