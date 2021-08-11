import React ,{useState} from 'react'
import Head from 'next/head'
import Header from '../../../../../components/header/header'
import Footer from '../../../../../components/footer/footer'
import Link from 'next/link'

import CA_vs_CA from './can_vs_can-1'
import CA_vs_poste from './ca_vs_poste'
import CA_vs_activite from './ca_vs_activite'
import CA_vs_collaborateurs from './ca_vs_collaborateurs'
import CA_vs_masseSalarial from './ca_vs_masseSalarial'
import TauxReussite from './tauxReussite'

export default function statistiques() {

    const [chart,setChart]=useState("ca_vs_ca")
    
    return (
        <>
            <Head>
                <title>A recruit | Statistiques</title>
            </Head>

            <div className="statistiques consultant">
            <Header
                    interface="gestionrecrutements"
                >
                     <li>
                                <Link href="/interface/consultant">
                                    <a>
                                        Dashboard
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/interface/consultant/boiteaoutils/gestionrecrutements">
                                    <a >
                                        Gestion recrutements
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>
                                        CVthèque
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/interface/consultant/boiteaoutils/statistiques">
                                    <a className="locate">
                                        Statistiques
                                    </a>
                                </Link>
                            </li>
                            <li><a>Gestion Comptable</a>
                                <ul>
                                    <li><Link href="/interface/consultant/boiteaoutils/gestioncomptable/factures"><a > Factures</a></Link> </li>
                                    <li><Link href="/interface/consultant/boiteaoutils/gestioncomptable/compteresultat"><a > Compte Résultat</a></Link> </li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/interface/consultant/boiteaoutils/placeaffaire">
                                    <a> Place affaire</a>
                                </Link>
                            </li>
                </Header>
                <div className="orientationH">
                   
                     <div className="body">

                        <p className="recutor_title">ESPACE STATISTIQUES</p>
                        
                        <div className="select">
                            <select onChange={(e)=>{setChart(e.target.value)}}>
                                <option value="ca_vs_ca">CA N VS CA N-1</option>
                                <option value="ca_vs_collaborateur">CA/Collaborateur</option>
                                <option value="taux_reussite">Taux de réussite</option>
                                <option value="ca_poste">CA/Poste</option>
                                <option value="ca_vs_activite">CA/Activité</option>
                                <option value="ca_vs_masse_salariale">CA/Masse salariale client</option>
                            </select>
                        </div>
                        <div className="chart">
                           { 
                            chart==="ca_vs_ca"?
                                <CA_vs_CA/>
                            :chart==="ca_vs_collaborateur"?
                                <CA_vs_collaborateurs/>
                            :chart==="taux_reussite"?
                                <TauxReussite/>
                            :chart==="ca_poste"?
                                <CA_vs_poste/>
                            :chart==="ca_vs_activite"?
                                <CA_vs_activite/>
                            :chart==="ca_vs_masse_salariale"?
                                <CA_vs_masseSalarial/>
                            :null
                            }
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
            
        </>
    )
}
