import {useState,useEffect} from 'react'
import Head from 'next/head';
import Link from 'next/link';
import Axios from 'axios'
import {useRouter} from 'next/router'

import ReactLocalStorage  from 'reactjs-localstorage';





export default function inscription({dest}) {
    
    const router=useRouter();//donne la personne qui veut s'inscrire 


    const [user_name,setUserName]=useState(false);
    const [user_firstname,setUserFirstName]=useState(false);
    const [user_email,setUserEmail]=useState(false);
    const [user_password1,setUserpassword1]=useState(false);
    const [user_password2,setUserpassword2]=useState(false);
    const [user_right,setUserRight]=useState(dest);
    const [alert,setAlert]=useState(false);

   

    const inscription = (e)=>{

        e.preventDefault()
        if(user_password1 !== user_password2){

            setAlert("Le mot de pass n'est pas identique")
            
        }else if(!user_name || !user_firstname || !user_email || !user_password1 || !user_password2){

            setAlert(" Veuillez remplir tous les champs pour vous inscrire")
        }else{

           Axios.post('http://localhost:3080/signup',{
                
                user_name:user_name,
                user_firstname:user_firstname,
                user_email:user_email,
                user_password:user_password1,
                user_right:user_right

            }).then((result)=>{

                console.log(result)
                
                if(!result.data.err){

                    console.log(result.data)

                    if(router.query.dest==="recruteur"){

                        Axios.post('http://localhost:3080/createCompany',{//creer une centreprise à son nom

                            user_id:result.data.user_info.user_id

                        });
                    }

                    //creer unser_info
                    Axios.post('http://localhost:3080/createUserInfo',{//creer une centreprise à son nom

                            user_id:result.data.user_info.user_id

                    });


                    ReactLocalStorage.reactLocalStorage.setObject('jwt',{jwt:result.data.jwt});
                    ReactLocalStorage.reactLocalStorage.get('jwt', true);


                    window.location.href = `../interface/recruteur`

                }else {
                     setAlert("Deja inscrit")
                }
            });
        }

       

        
    }

   
    
    return (

        <>
            <Head>
                <title>Inscription a-recruit</title>
            </Head>

            <main className="login_signin_background center orientationV">
               
                <div className="login-root">

                    <div className="box-root flex-flex flex-direction--column style1" >

                        <div className="box-root flex-flex flex-direction--column style14">
                            <div className="left"></div>
                            <div className="formbg-outer">
                            <div className="formbg">
                                <div className="formbg-inner padding-horizontal--48">
                                    <h3 className="padding-bottom--15 color-p">Inscription</h3>
                                    <div className="alert" className="alert">{alert && alert}</div>
                                    <form id="stripe-login">
                                    <div className="row">
                                            <div className="mb-3 col">
                                                <label  className="form-label color-p">Nom</label>
                                                <input id="inputName" type="text" className="form-control inputs" name="nom" placeholder="Nom"  required onChange={(e)=>{setUserName(e.target.value)}}/>
                                                <div id="dangerAlert"className="form-text"></div>
                                            </div>
                                            <div className="mb-3 col">
                                                <label  className="form-label color-p">Prénom</label>
                                                <input type="text" className="form-control inputs" name="nom" placeholder="Prénom"  required onChange={(e)=>{setUserFirstName(e.target.value)}}/>
                                                <div className="form-text"></div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="mb-3 col">
                                                <label  className="form-label color-p">e-mail</label>
                                                <input type="email" className="form-control inputs" name="email" placeholder="e-mail"  required onChange={(e)=>{setUserEmail(e.target.value)}}/>
                                                <div className="form-text"></div>
                                            </div>
                                            </div>
                                            <div className="row">
                                            <div className="col mb-3">
                                                <label className="col-form-label color-p">Mot de passe</label>
                                                <div className="col">
                                                    <input type="password" name="password" className="form-control" placeholder="Mot de passe"  onChange={(e)=>{setUserpassword1(e.target.value)}}/>
                                                </div>
                                            </div>
                                            <div className="col mb-3">
                                                <label className="col-form-label color-p">Confirmation</label>
                                                <div className="col">
                                                    <input type="password" name="passwordConfirm" className="form-control" placeholder="Confirmez mot de passe"  onChange={(e)=>{setUserpassword2(e.target.value)}}/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="center">
                                            <button  type="submit" className="btn btn-primary mt-4 mb-4 " onClick={(e)=>{inscription(e)}}>Inscription</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="footer-link padding-top--24">
                                <span>Vous avez déja un compte ?<Link href={{pathname :"/authentification/connexion",query:{dest:dest}}}><a> Se connecter</a></Link></span>
                                <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                                <span><Link href="/inscription"><a> © A recruite</a></Link></span>
                                <span><Link href="/inscription"><a> Contacte</a></Link></span>
                                <span><Link href="/inscription"><a> Politique de confidentialité</a></Link></span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </main>
        </>
    );
}

export const getServerSideProps = async ({query}) => {
    const dest = query.dest;
    return {
       props: { dest }
    }
}