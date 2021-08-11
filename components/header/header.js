import React,{useEffect,useState} from 'react'
import Link from 'next/link'
import ReactLocalStorage from 'reactjs-localstorage'
import jwt_decode from 'jwt-decode'



export default function Header(props) {

    const [user,setUser]=useState("");
    const [largeur,setLargeur]=useState(2000);
    const [toggleMenu,setToggleMenu]=useState(false);


    useEffect(() => {

        //Chargement des informations de l'utilisateur
            let data={};
            data= ReactLocalStorage.reactLocalStorage.getObject('jwt');
            let decoded = jwt_decode(JSON.stringify(data))
            const random = Math.floor(((decoded.user_name.length+decoded.user_firstname.length)/(decoded.user_name.length*decoded.user_firstname.length))*16777215).toString(16);
            setUser({...decoded,color:'#' +random.toString(16)})
        //Verification de la taille de l'écran
            setLargeur(window.innerWidth);

            const changeWidth =()=>{

                setLargeur(window.innerWidth);
                
                if(window.innerWidth < 1075){
                    setToggleMenu(false);
                }
            }
            window.addEventListener('resize',changeWidth);
        //console.log(largeur)
        return()=>{
            window.removeEventListener('resize',changeWidth);
        }


    }, [])
    console.log(user)

    const disconnect  = () =>{
        ReactLocalStorage.reactLocalStorage.remove('jwt')

    }

   // console.log(user)


    const nb_notif = 5;

    
    return (
           <div role="navigation" className=" header ">
                <div className="menu">

                    <ul>
                        <li className="a_logo first">
                            <Link href="/" className="first">
                                <a className="first">
                                    <img className="h_logo" src="/images/A_Recruit.jpg" alt="LOGO"/>
                                </a>
                            </Link>
                        </li>
                        { (toggleMenu || largeur > 1075) && <>
                        
                          {props.children}
                            {(largeur < 1075) &&
                                <>                  
                                    <li  >
                                        <Link href="/profile[1]">
                                            <a>
                                            Mon profile
                                            </a>
                                        </Link>
                                    </li>
                                    <li onClick={(e)=>{e.preventDefault();disconnect()}}>
                                        <Link href="/profile[1]">
                                            <a>
                                                Se deconnecter
                                            </a>
                                        </Link>
                                    </li>
                                </>

                            }
                        </>}
                    </ul>
                    
                </div>

                <div className="user-menu-info menu center orientationH">

                    <div className="notification_z" onClick={()=>{props.callback && props.callback()}}>
                        <img className="icon" src="/images/icon_notif.png" alt='noti_icon'/>
                        <span>{nb_notif}</span>
                        
                    </div>
                                     
                    <div className="user orientationV">
                        <ul>
                            <li className="first">
                                <a className="first">
                                    <div className="user_img" style={{backgroundColor:user.color}}>
                                        {user.img ?
                                                <img className="icon" src="/images/icon_def_usr.png" alt='noti_icon'/>
                                            :
                                                <div>{user.user_name && user.user_name.charAt(0)+ user.user_firstname.charAt(0)}</div>
                                            }
                                    </div>  
                                </a>
                                {(largeur > 1075) &&
                                    <>
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
                                    </>
                                }
                            </li>
                        </ul>
                    </div>
                    {(largeur < 1075) &&
                        <div className="menu_btn" onClick={()=>{setToggleMenu(!toggleMenu)}}>&#9776;</div>
                    }
                </div>
            </div>
       
    )
}
