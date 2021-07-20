import { useState } from 'react';
import Axios from 'axios'
import Head from 'next/head';
import Link from 'next/link';
import ReactLocalStorage from 'reactjs-localstorage'
import jwtDecode from 'jwt-decode';


export default function Connect({dest}) {


    const [user_email,setUserEmail]=useState(false);
    const [user_password,setUserpassword]=useState(false);
    const [alert,setAlert]=useState(false);

    const connexion = (e)=>{

        e.preventDefault()
        
        if(!user_email || !user_password){

            setAlert(" Veuillez remplir tous les champs pour vous inscrire")
        }else{

           Axios.post('http://localhost:3080/login',{

                user_email:user_email,
                user_password:user_password

            }).then(resutlt=>{

                if(!resutlt.data.err){
                    //resutlt.redirect("/")
                    //console.log(resutlt.data)
                    ReactLocalStorage.reactLocalStorage.setObject('jwt',{jwt:resutlt.data});
                    ReactLocalStorage.reactLocalStorage.get('jwt', true);
                    //let user = jwtDecode(JSON.stringify(resutlt.data));
                    //console.log(user)
                    window.location.href =`../interface/recruteur`;
                }else {
                    setAlert("Identifiants et / ou  mot de passe incorrects")
                }
            });
        }

       
        
    }
   
    return (
        <>
            <Head>
                <title>Connection a-recruit</title>
            </Head>

            <main className="login_signin_background center orientationV">

                  

                    <div className="login-root">

                        <div className="box-root flex-flex flex-direction--column style1" >

                            <div className="box-root flex-flex flex-direction--column ">
                            
                                <div className="formbg-outer">
                                <div className="formbg">
                                    <div className="formbg-inner padding-horizontal--48">
                                        <h3 className="color-p padding-bottom--15">Connexion</h3>
                                        <div className="alert" className="alert">{alert && alert}</div>
                                        <form id="stripe-login">
                                            <div className="field padding-bottom--24">
                                                <label className="color-p">Email</label>
                                                <input type="email" name="email" onChange={(e)=>{setUserEmail(e.target.value)}}/>
                                            </div>
                                            <div className="field padding-bottom--24">
                                                <div className="grid--50-50">
                                                    <label className="color-p">Mot de passe</label>
                                                    <div className="reset-pass">
                                                        <a href="#">Mot de passe oublié ?</a>
                                                    </div>
                                                </div>
                                                <input type="password" name="password" onChange={(e)=>{setUserpassword(e.target.value)}}/>
                                            </div>
                                                <div className="field field-checkbox padding-bottom--24 flex-flex align-center">
                                                    <label className="color-p">
                                                        <input type="checkbox" name="checkbox"/> Rester connecter
                                                    </label>
                                                </div>
                                            <div className="field padding-bottom--24">
                                                <input type="submit" name="submit" value="Continuer" onClick={(e)=>{connexion(e)}}/>
                                            </div>
        
                                        </form>
                                    </div>
                                </div>
                                <div className="footer-link padding-top--24">
                                    <span>Pas encore de compte chez nous ?<Link href={{pathname :"/authentification/inscription",query:{dest:dest}}}><a> S'inscrire</a></Link></span>
                                    <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                                    <span><Link href="/authentification/inscription"><a> © A recruite</a></Link></span>
                                    <span><Link href="/authentification/inscription"><a> Contacte</a></Link></span>
                                    <span><Link href="/authentification/inscription"><a> Politique de confidentialité</a></Link></span>
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