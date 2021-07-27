import React ,{useState} from 'react'
import Head from 'next/head'
import Header from '../../../../components/header/header'
import Menu from '../../../../components/menu_consultant/menu'
import Footer from '../../../../components/footer/footer'

import CA_vs_CA from './can_vs_can-1'
import CA_vs_poste from './ca_vs_poste'
import CA_vs_activite from './ca_vs_activite'
import CA_vs_collaborateurs from './ca_vs_collaborateurs'
import CA_vs_masseSalarial from './ca_vs_masseSalarial'
import TauxReussite from './tauxReussite'

export default function statistiques() {

    const [showhide,setShowHide]=useState(false)
    const [chart,setChart]=useState("ca_vs_ca")
    return (
        <>
            <Head>
                <title>A recruit | Statistiques</title>
            </Head>

            <div className="statistiques">
                <Header/>
                <div className="orientationH">
                    <Menu
                        pos="statistiques"
                        showHide={showhide}
                    />
                     <div className="body">

                        <div className="titleContainer center orientationH spaceBetween">
                            <div className="nav-btn" onClick={()=>setShowHide(!showhide)}>
                                <div className="nav-btn-span"></div>
                                <div className="nav-btn-span"></div>
                                <div className="nav-btn-span"></div>
                            </div>
                            <p className="recutor_title">ESPACE STATISTIQUES</p>
                            <div></div>
                        </div>
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
