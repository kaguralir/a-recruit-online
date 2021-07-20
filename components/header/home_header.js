import React from 'react'
import Link from 'next/link'
import { redirect } from 'nextjs-redirect'

export default function animated_home_header() {

    return (
        <>
            <header className="center">
                <div className="home_logo">LOGO</div>
                <div className="login_signin orientationH">
                   
                    <select className="home_menu_select">
                        <option> S'inscrire ? </option>
                        <option>&nbsp;&nbsp;Candidat&nbsp;&nbsp;</option>
                        <option>&nbsp;&nbsp;Recruteur&nbsp;&nbsp;</option>
                    </select>
                   
                    <Link href="/authentification/connexion">
                        <a><div>Se connecter ?</div></a>
                    </Link>
                   
                </div>
            </header>

            <style jsx>{`
                .home_logo{
                    position:absolute;
                    top: 0;
                    padding:1em;
                    animation: slideLogo 1s ease-out 1s forwards ; 
                }
                .login_signin{
                    opacity:0;
                    position:absolute;
                    top: 0;
                    padding:1em;
                    color:#fff;
                    animation: slideSigninLogin 1s ease-out 1s forwards ; 
                }
                .home_menu_select{
                    background-color: transparent;
                   
                    outline: none;
                    border: none;
                    color: #fff;
                }
                .home_menu_select option{
                    color:#000;
                }
                .home_menu_select option:nth-child(1){
                    display:none;
                    min-width:200px;
                }
                .login_signin a,div{
                    text-decoration: none;
                    padding-left: 10px;
                    color:#fff;
                }
                @keyframes slideLogo{
                    0% {
                        left:50%
                        display: flex;
                    }
                    100% {
                        left:0%
                    }
                }
                @keyframes slideSigninLogin{
                    0% {
                        right:40%;
                    }
                    10% {
                        opacity:0.1
                    }
                    20% {
                        opacity:1
                    }
                   
                    100% {
                        right:0%
                        opacity:1
                    }
                }

            `}</style>
        </>

            
    )
}
