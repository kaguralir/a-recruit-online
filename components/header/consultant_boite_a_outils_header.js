import React,{useEffect,useState} from 'react'
import Link from 'next/link'
import ReactLocalStorage from 'reactjs-localstorage'
import jwt_decode from 'jwt-decode'



export default function Header(props) {

    const [user,setUser]=useState("");

    useEffect(() => {
        let data={};
        data= ReactLocalStorage.reactLocalStorage.getObject('jwt');
        //decoder
        let decoded = jwt_decode(JSON.stringify(data))
        setUser(decoded)
    }, [])

    const disconnect  = () =>{
        ReactLocalStorage.reactLocalStorage.remove('jwt')

    }

   // console.log(user)


    const nb_notif = 5;

    
    return (
           <div role="navigation" className=" header ">
                <div className="menu">

                    <ul>
                        <li className="a_logo">
                            <Link href="/">
                                <a >
                                    <img className="h_logo" src="/images/A_Recruit.jpg" alt="LOGO"/>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/interface/consultant">
                                <a className={props.interface==="dashboard"?"locate":""}>
                                    Dashboard
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/interface/consultant/boiteaoutils/gestionrecrutements">
                                <a className={props.interface==="gestionrecrutements"?"locate":""}>
                                    Gestion recrutements
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a className={props.interface==="cvtheque"?"locate":""}>
                                    CVthèque
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/interface/consultant/boiteaoutils/statistiques">
                                <a className={props.interface==="statistiques"?"locate":""}>
                                    Statistiques
                                </a>
                            </Link>
                        </li>
                        <li><a className={props.interface==="gestionComptable"?"locate":""}>Gestion Comptable</a>
                            <ul>
                                <li><Link href="/interface/consultant/boiteaoutils/gestioncomptable/factures"><a > Factures</a></Link> </li>
                                <li><Link href="/interface/consultant/boiteaoutils/gestioncomptable/compteresultat"><a > Compte Résultat</a></Link> </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/interface/consultant/boiteaoutils/placeaffaire">
                                <a className={props.interface==="placeaffaire"?"locate":""}> Place affaire</a>
                            </Link>
                        </li>
                        
                    </ul>
                    
                </div>

                <div className="menu center orientationH">

                    <div className="notification_z" onClick={()=>{props.callback && props.callback()}}>
                        <img className="icon" src="/images/icon_notification.png" alt='noti_icon'/>
                        <span>{nb_notif}</span>
                        
                    </div>
                    <img className="icon" src="/images/icon_def_usr.png" alt='noti_icon'/>
                    <div className="user orientationV">
                        <div className="user_name_z"></div>

                        <ul>

                            <li><a>{" "+user.user_name + " " + user.user_firstname}</a>
                                <ul>
                                    <li className="center-H" >
                                        <Link href="/profile[1]">
                                            <a>
                                            Mon profile
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="disconnect" onClick={(e)=>{e.preventDefault();disconnect()}}>
                                        <Link href="/profile[1]">
                                            <a>
                                                Se deconnecter
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            
                            </li>
                        </ul>
                        
                    </div>
                </div>

            </div>
       
    )
}
