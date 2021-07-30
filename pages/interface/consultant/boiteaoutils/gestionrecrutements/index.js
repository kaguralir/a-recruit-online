import React, { Component,useState } from 'react'
import Head from 'next/head'
import Header from '../../../../../components/header/consultant_boite_a_outils_header'
import Menu from '../../../../../components/menu_consultant/menu'
import Footer from '../../../../../components/footer/footer'
import Link from 'next/link'


export default function gestionrecrutements() {

    const [showhide,setShowHide]=useState(false)

    return (
        <>
            <Head>
                <title>A recruit | Consultant</title>
            </Head>

            <div className="gestionrecrutements">
                <Header
                    interface="gestionrecrutements"
                />
                <div className="orientationH">
                    
                    <div className="body">
                        
                        <p className="recutor_title">ESPACE DE GESTION DE RECRUTEMENT</p>
                        
                        
                        <div className="rechercher orientationH">
                            <div className="rechercherinput orientationV">
                                <input type="search" placeholder="Rechercher un prospect"/>
                                <input type="search" placeholder="Rechercher un employeur"/>
                                <input type="search" placeholder="Rechercher un candidat"/>
                            </div>
                            <div className="result">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Références</th>
                                            <th>Nom</th>
                                            <th>Téléphone</th>
                                            <th>Email</th>
                                            <th colSpan="3"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr >
                                            <td>Item1</td>
                                            <td >Item1</td>
                                            <td>Item1</td>
                                            <td >Item1</td>
                                            <td className="td">
                                                <Link href="gestionrecrutements/employeur">
                                                    <a>
                                                        <div className="view"></div>
                                                    </a>
                                                </Link>
                                            </td>
                                            <td className="td">
                                                <Link href="gestionrecrutements/employeur">
                                                    <a>
                                                        <div className="print"></div>
                                                    </a>
                                                </Link>
                                            </td>
                                            <td className="td">
                                                <Link href="gestionrecrutements/employeur">
                                                    <a>
                                                        <div  className="edit"></div>
                                                    </a>
                                                </Link>
                                            </td>                               
                                        </tr>
                
                                        <tr>
                                            <td>Item1</td>
                                            <td >Item1</td>
                                            <td>Item1</td>
                                            <td >Item1</td>
                                            <td className="td">
                                                <Link href="gestionrecrutements/employeur">
                                                    <a>
                                                        <div className="view"></div>
                                                    </a>
                                                </Link>
                                            </td>
                                            <td className="td">
                                                <Link href="gestionrecrutements/employeur">
                                                    <a>
                                                        <div className="print"></div>
                                                    </a>
                                                </Link>
                                            </td>
                                            <td className="td">
                                                <Link href="gestionrecrutements/employeur">
                                                    <a>
                                                        <div  className="edit"></div>
                                                    </a>
                                                </Link>
                                            </td> 
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                        <div className="new_prospect">
                            <div className="title">CRÉER UN NOUVEAU PROSPECT</div>
                            <form className="orientationH w100">
                                <div className="orientationV">
                                    <input type="text" placeholder="Entreprise"/>
                                    <input type="text" placeholder="Téléphone"/>
                                    <input type="text" placeholder="Mail"/>
                                </div>
                                <div className="right orientationV w100">
                                    <input type="text" placeholder="Siège social"/>
                                    <div className="orientationH">
                                            <input type="text" placeholder="RCS"/>
                                            <input type="text" placeholder="Représentant"/>
                                    </div>
                                    <div className="orientationH spaceBetween">
                                        <div></div>
                                        <input className="submit" type="submit" value="Enregister"/>

                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="new_prospect">
                            <div className="title">CRÉER UN NOUVEAU CANDIDAT</div>
                            <form className="orientationH w100">
                                <div className="orientationV">
                                    <input type="text" placeholder="Nom"/>
                                    <input type="text" placeholder="Prénom"/>
                                    <input type="text" placeholder="Poste"/>
                                </div>
                                <div className="right orientationV w100">
                                    <input type="text" placeholder="Adresse complète"/>
                                    <div className="orientationH">
                                            <input type="text" placeholder="Téléphone"/>
                                            <input type="text" placeholder="Email"/>
                                    </div>
                                    <div className="orientationH spaceBetween">
                                        <div></div>
                                        <input className="submit" type="submit" value="Enregister"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    )
    
}
