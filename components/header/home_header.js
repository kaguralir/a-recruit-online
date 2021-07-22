import React,{useEffect,useState} from 'react'
import Link from 'next/link'
import ReactLocalStorage from 'reactjs-localstorage'
import jwt_decode from 'jwt-decode'



export default function Home_header(props) {


    return (
        <>
            <div className="header orientationH spaceBetween">
                <Link href="/">
                    <a>
                        <img className="h_logo" src="/images/A_Recruit.jpg" alt="LOGO"/>
                    </a>
                </Link>
                <div className="orientationH ">

                    <div className="user orientationV">
                        <div className="user_name_z"></div>

                        <ul>

                            <li>Mon compte
                                <ul>
                                    <li className="center-H" >
                                        <Link href="/profile[1]">
                                            <a>
                                                Collaborateur
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="center-H" >
                                        <Link href="/profile[1]">
                                            <a>
                                                Employeur
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="center-H" >
                                        <Link href="/profile[1]">
                                            <a>
                                                Candidat
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="center-H" >
                                        <Link href="/profile[1]">
                                            <a>
                                                Partenaire
                                            </a>
                                        </Link>
                                    </li>
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
                    z-index: 3;
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
                    min-width: 130px;
                    text-align: center;
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


            `}</style>
        </>
    )
}
