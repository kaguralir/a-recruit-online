import React ,{useState,useEffect} from 'react'
import Head from 'next/head'
import Header from '../../../../../components/header/header'
import Footer from '../../../../../components/footer/footer'
import Link from 'next/link'

export default function index() {

    const [offers,setOffers]=useState([])
    useEffect(()=>{
        setOffers([{reference:"21-127565",intitule: "Attaché commercial (H/F)",contact : "M.PIRO "}])
    },[])
    
    return (
        <>
        <Head>
            <title>A recruit | Place Affaire</title>
        </Head>

        <div className="placeaffaire consultant">
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
                                <a>
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
                                <a >
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
                                <a className="locate"> Place affaire</a>
                            </Link>
                        </li>
            </Header>
            <div className="body">

                <p className="recutor_title">PLACE AFFAIRE</p>
                <div className="w100">      
                    <table>
                        <thead>
                            <tr>
                                <th>Reference</th>
                                <th>Intitule</th>
                                <th>Contact</th>
                                <th colSpan="3"></th>
                            </tr>
                        </thead>
                        <tbody>
                        
                            {
                                offers.map((data,index)=>{
                            
                                    return (
                                        <tr key={index}>
                                            <td >{data.reference}</td>
                                            <td >{data.intitule}</td>
                                            <td >{data.contact}</td>
                                            <td className="td">
                                                <Link href="">
                                                    <a>
                                                        <div className="view"></div>
                                                    </a>
                                                </Link>
                                            </td>
                                            <td className="td">
                                                <Link href="">
                                                    <a>
                                                        <div className="print"></div>
                                                    </a>
                                                </Link>
                                            </td>
                                            <td className="td">
                                                <Link href="">
                                                    <a>
                                                        <div  className="edit"></div>
                                                    </a>
                                                </Link>
                                            </td>    
                                        </tr>
                                    )
                                })
                            }
                        
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
    </>
    )
}
