import React, { Component } from 'react'
import Head from 'next/head'
import Header from '../../../components/header/header'
import Footer from '../../../components/footer/footer'
import Domaines from '../../../components/etiquettes/etiquette'
import Link from 'next/link'
import Image from 'next/image'

export default function Consultant() {

        var state = {

            consultant: {
                id:3,
                name:"Gherici DRISSI",
                email:"contact@gcdconseil.com"
            },
            
            company:{
                company_name:"GCD Conseil",
                img:"/images/partner/partner_audi.svg",
                rcs:"RCS de BESANCON",
                siret:"N° de SIRET 493 543 433 00061",
                ape:"Code APE 7022Z Conseil pour les Affaires",
                headquarter_adresse:"7 rue Albrecht DURER",
                headquarter_zip_code:"25000",
                headquarter_city:"Besançon",
                phone_number:"06 32 61 59 75",
                stats:{
                    lastCa:18250,
                    in_progress:2,
                    closed:24,
                    all:26,
                    prospect:14,
                    cvs:25987
                }
            }

        }

        return (
            <>
                <Head>
                    <title>A recruit | Consultant</title>
                </Head>

                <div className="consultant">
                    <Header
                        interface="dashboard"
                    >
                        <li>
                            <Link href="/interface/consultant">
                                <a className="locate">
                                    Dashboard
                                </a>
                            </Link>
                        </li>
                    </Header>
                    <div className="body ">
                        <div className="title center orientationV">
                            <span className="bold">{state.consultant.name}</span>
                            <div>Bienvenu sur votre compte collaborateur</div>
                        </div>

                        <div className="infos">
                            <div className="flex">
                                <Image className="info_img" src ={state.company.img} width={200} height={200}/>
                                <div className= "info">
                                    <div><span>{state.company.company_name}</span></div>
                                    <div><span>{state.consultant.name}</span></div>
                                    <div>{state.company.rcs}</div>
                                    <div>{state.company.siret}</div>
                                    <div>{state.company.ape}</div>
                                    <div>
                                        Siège social :
                                    </div>
                                    <div>{state.company.headquarter_adresse}</div>
                                    <div>{state.company.headquarter_zip_code}</div>
                                    <div>{state.company.headquarter_city}</div>
                                    <div>Tel :{state.company.phone_number}</div> 
                                    <div>Mail :{state.consultant.email}</div> 
                                </div>
                            </div>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>a </td>
                                            <td>b </td>
                                            <td>b </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="light">
                                            <td>CA N-1</td>
                                            <td className="right">{state.company.stats.lastCa}€</td>
                                            <td className="td">
                                                <Link href="">
                                                    <a>
                                                        <div className="view"></div>
                                                    </a>
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Dossier en cours</td>
                                            <td className="right">{state.company.stats.in_progress}</td>
                                            <td className="td">
                                                <Link href="">
                                                    <a>
                                                        <div className="view"></div>
                                                    </a>
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr className="light">
                                            <td>Dossiers clos</td>
                                            <td className="right">{state.company.stats.closed}</td>
                                            <td className="td">
                                                <Link href="">
                                                    <a>
                                                        <div className="view"></div>
                                                    </a>
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Total dossier</td>
                                            <td className="right">{state.company.stats.all}</td>
                                            <td className="td">
                                                <Link href="">
                                                    <a>
                                                        <div className="view"></div>
                                                    </a>
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr className="light">
                                            <td>Prospect</td>
                                            <td className="right">{state.company.stats.prospect}</td>
                                            <td className="td">
                                                <Link href="">
                                                    <a>
                                                        <div className="view"></div>
                                                    </a>
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>CV tèque</td>
                                            <td className="right">{state.company.stats.cvs}</td>
                                            <td className="td">
                                                <Link href="">
                                                    <a>
                                                        <div className="view"></div>
                                                    </a>
                                                </Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                        </div>
                        <div className="auto ">
                            <span>Mes outils</span>
                        </div>
                        {/* <div className="w90">
                            <div><span>Dossiers en cours : </span></div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Référence</th>
                                        <th>Statut</th>
                                        <th>Titre</th>
                                        <th>Date</th>
                                        <th>Contact</th>
                                        <th colSpan="2"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Référence</td>
                                        <td>Statut</td>
                                        <td>Titre</td>
                                        <td>Date</td>
                                        <td>Contact</td>
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
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                         */}
                        <div className="etiquettes">
                            <Link href="/interface/consultant/boiteaoutils">
                                <a>
                                    <Domaines
                                        src="/images/tools.png"
                                        title1="Boite à outils"
                                        style={{
                                            color:'#5AAAE7'
                                        }}
                                    />
                                </a>
                            </Link>
                            <Link href="/interface/consultant/formations">
                                <a>
                                    <Domaines
                                        src="/images/formation.png"
                                        title1="Formations"
                                        style={{
                                            color:'#F948B4'
                                        }}
                                    />
                                </a>
                            </Link>
                            <Link href="/interface/consultant/blog">
                                <a>
                                    <Domaines
                                        src="/images/blog.png"
                                        title1="Blog A recruit"
                                        style={{
                                            color:'#615DF9'
                                        }}
                                    />
                                </a>
                            </Link>
                            <Link href="/interface/consultant/offrespartenaires">
                                <a>
                                    <Domaines
                                        src="/images/partenaires.png"
                                        title1="Offres partenaires"
                                        style={{
                                            color:'#615DF9'
                                        }}
                                    />
                                </a>
                            </Link>
                            <Link href="/interface/consultant/infoconsultant">
                                <a>
                                    <Domaines
                                        src="/images/web_app.svg"
                                        title1="Infos consultant"
                                        style={{
                                            color:'#615DF9'
                                        }}
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
        )    
}
