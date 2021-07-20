import React,{useEffect,useState} from 'react'
import Link from 'next/link'
import ReactLocalStorage from 'reactjs-localstorage'
import jwt_decode from 'jwt-decode'



export default function header(props) {

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

        window.location.href =`/`;

    }

   // console.log(user)


    const nb_notif = 5;

    
    return (
        <>
            <div className="header orientationH spaceBetween">
                <Link href="/">
                    <a>
                        <img className="h_logo" src="/images/A_Recruit.jpg" alt="LOGO"/>
                    </a>
                </Link>
                <div className="orientationH ">

                    <div className="notification_z" onClick={()=>{props.callback()}}>
                        <img className="icon" src="/images/icon_notification.png" alt='noti_icon'/>
                        <span>{nb_notif}</span>
                        
                    </div>

                    <div className="user orientationV">
                        <div className="user_name_z"></div>

                        <ul>

                            <li><a><img className="icon" src="/images/icon_def_usr.png" alt='noti_icon'/>{" "+user.user_name + " " + user.user_firstname}</a>
                                <ul>
                                    <li className="center-H" >
                                        <Link href="/profile[1]">
                                            <a>
                                            Mon profile
                                            </a>
                                        </Link>
                                    </li>
                                    <li onClick={()=>{disconnect()}}>Se deconnecter</li>
                                </ul>
                            
                            </li>
                        </ul>
                        
                    </div>
                </div>
               
            </div>
            <style jsx>{`

                .header{
                    background-color: var(--color-primary-light);
                    width: 100%;
                    height : 40px;
                    align-items: center;
                    color: #fff;
                }
                
                .icon{
                    width: 20px;
                }
                .notification_z{
                    padding-right:0.7em;
                    cursor:pointer;
                }
                .notification_z span{
                    position: relative;
                    top: -6px; left: -5px;
                    width: 20px;
                    min-width: 15px;
                    font-size: 0.8em;
                    padding-left : 0.3em;
                    padding-right : 0.3em;
                    background-color: green;
                    border-radius: 15px;
                }
                .h_logo{
                    max-height: 40px;
                }

                .user_name_z{
                    padding-right:1em;
                    padding-left: 0.5em;
                }
                .user{
                    display: flex;
                    padding-right: 0.5em;
                }
                .user ul {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                }
                .user ul li {
                }
                .user ul li a{
                    color :  #fff;
                    text-decoration: none;
                    cursor : pointer;
                }
                .user li ul {
                    display: none;
                    background-color: var(--color-primary-light);
                    z-index: 10;
                    
                }

                .user li ul li{ 
                    min-height: 30px;
                    border-top:1px solid #fff;
                    padding : 2px;
                    cursor: pointer;
                }

                .user li ul li :nth-child(1){
                    margin-top:0.7em;
                }

                .user li:hover ul {
                    /* Ici l’affichage du sous-user */
                    display: block;
                    position: absolute;
                }
                .user li:hover li {
                     float: none;
                }
                .user ul li ul li{
                    padding-left: 1em;
                    padding-right: 1em;
                    padding-top: 0.5em;
                    padding-bottom: 0.5em;

                }
                .user ul li ul li:hover{
                    background: #999;
                } 
                .user li:hover li a:hover {
                    background: #555;
                }​

            `}</style>
        </>
    )
}
