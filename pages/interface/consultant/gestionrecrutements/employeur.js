import React, { Component,useState } from 'react'
import Head from 'next/head'
import Header from '../../../../components/header/header'
import Menu from '../../../../components/menu_consultant/menu'
import Footer from '../../../../components/footer/footer'

export default function employeur() {
    
    const [showhide,setShowHide]=useState(false)


    return (
        <>
            <Head>
                <title>A recruit | Consultant</title>
            </Head>

            <div className="gestionrecrutements">
                <Header/>
                <div className="orientationH">
                    <Menu
                        pos="gestionrecrutements"
                        showHide={showhide}
                    />
                    <div className="body">
                        
                        <div className="titleContainer center orientationH spaceBetween">
                            <div className="nav-btn" onClick={()=>setShowHide(!showhide)}>
                                <div className="nav-btn-span"></div>
                                <div className="nav-btn-span"></div>
                                <div className="nav-btn-span"></div>
                            </div>
                            <p className="recutor_title">ESPACE DE GESTION DE RECRUTEMENT</p>
                            <div></div>
                        </div>
                        <div className="employeur orientationH">

                            <div className="reference">
                                <h5>Référence : 210825</h5>
                                <div>
                                    <label> Raison sociale : </label>
                                    <input type="text" placeholder="ANTS Courtier en Travaux"/>
                                </div>
                                <div>
                                    <label> Type d’entreprise : </label>
                                    <input type="text" placeholder=" SAS"/>
                                </div>
                                <div>
                                    <label> RCS de : </label>
                                    <input type="text" placeholder=" Besançon"/>
                                </div>
                                <div>
                                    <label> Numéro : : </label>
                                    <input type="text" placeholder=" 493 543 433 00061"/>
                                </div>
                                <div>
                                    <label> Siège sociale : </label>
                                    <input type="text" placeholder=" 2 rue Bertrand Russel"/>
                                </div>
                                <div>
                                    <label> Ville : </label>
                                    <input type="text" placeholder=" Besançon"/>
                                </div>
                                <div>
                                    <label>  Code postal : </label>
                                    <input type="text" placeholder=" 25000"/>
                                </div>
                                
                                <div>
                                    <label>  Représentant : </label>
                                    <input type="text" placeholder=" M. DRISSI Gherici"/>
                                </div>
                                <div>
                                    <label>  Qualité : </label>
                                    <input type="text" placeholder=" Président"/>
                                </div>
                                <div>
                                    <label>  Téléphone : </label>
                                    <input type="text" placeholder="06 32 61 59 75"/>
                                </div>
                                <div>
                                    <label>  Mail : </label>
                                    <input type="text" placeholder="contact@ants-courtiertravaux.com"/>
                                </div>
                                <div>
                                    <label>  Site : </label>
                                    <input type="text" placeholder="www.ants-courtiertravaux.com"/>
                                </div>
                                <div>
                                    <label>  Activité : </label>
                                    <input type="text" placeholder="Courtage en travaux"/>
                                </div>
                                <div>
                                    <label>  Masse salarial : </label>
                                    <input type="text" placeholder="- 50"/>
                                </div>
                                <div>
                                    <label>  Masse salarial : </label>
                                    <input type="text" placeholder="- 50"/>
                                </div>
                                <p>
                                    Zone d’activité : France antière
                                </p>
                            </div>
                            <div className="recrutement">
                                
                            </div>
                            <div className="renseignements">
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
