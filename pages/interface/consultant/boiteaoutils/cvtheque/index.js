

import Link from 'next/link';
import { api } from '../../../../api/api'


import { GetStaticProps, NextPage } from "next";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head'
import Consultant_layout from '../../../../../components/layouts/consultant_layout'
import { useState } from 'react';



const allcv = ({ cvs }) => {
    const [searchTerm, setSearchTerm] = useState("")

    /*     const [filter, setFilter] = useState("")
    
    
        const filterResults = (cvs, query) => {
    
            if (!query) {
                return [];
            }
    
            return cvs.filter((cv) => {
    
                return cv;
            });
    
        };
        const filteredResult = filterResults(cvs, filter);
        console.log(filteredResult);
     */

    return (
        <div>
            <Head>
                <title>A recruit | CV Thèque</title>
            </Head>

            <Consultant_layout
                position="cvtheque"
            >
                <div className="cvtheque-container">
                    <div>
                        <h1>Liste de CV</h1>
                    </div>
                    {/*                     <div className="w100 center orientationV">

                        <div className="search_bar w100">
                            <form onSubmit={(e) => { e.preventDefault(); }} role="search" className="w100">
                                <input className="w100" id="search" type="search" placeholder="Rechercher un CV" autoFocus autoComplete="off" required onChange={(e) => { setFilter(e.target.value) }} />
                            </form>
                            <ul>
                                {filteredResult.map((cv) => (
                                    <li key={cv.candidat_id} className="cv">
                                        <Link href={{ pathname: cv.origin === "Candidat" ? "/interface/consultant/boiteaoutils/gestionrecrutements/candidat" : "/interface/consultant/boiteaoutils/gestionrecrutements/recruteur", query: { id: cv.id, type: cv.origin } }}>
                                            <a>
                                                <div className="url">
                                                    {cv.user_firstname + " ( " + cv.origin + " ) "}
                                                </div>
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div> */}

                    <div className="App">
                        <input type="text" placeholder="Search..." onChange={(event) => { setSearchTerm(event.target.value) }} />
                        {cvs.filter((val) => {
                            if (searchTerm == '') {
                                return (
                                    <div className="cvCards-container">

                                        <div id="card">
                                            <div id="content">
                                                <div id="title">
                                                    Candidat nom: {val.user_firstname}
                                                </div>
                                                <div id="title">
                                                    Candidat prénom: {val.user_name}
                                                </div>
                                                <div id="desc">
                                                    Travail recherché: {val.searched_job1}
                                                </div>


                                                <div id="info-box">

                                                    <button className="btn--pay"><Link href={"/interface/consultant/boiteaoutils/cvtheque/" + val.candidat_id} className="link-cv">Voir le CV en détail</Link></button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>)
                            }
                            else if (val.user_name.toLowerCase().includes(searchTerm.toLowerCase()) || val.user_firstname.toLowerCase().includes(searchTerm.toLowerCase()) || val.searched_job1.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return (
                                    <div className="cvCards-container">

                                        <div id="card">
                                            <div id="content">
                                                <div id="title">
                                                    Candidat nom: {val.user_firstname}
                                                </div>
                                                <div id="title">
                                                    Candidat prénom: {val.user_name}
                                                </div>
                                                <div id="desc">
                                                    Travail recherché: {val.searched_job1}
                                                </div>


                                                <div id="info-box">

                                                    <button className="btn--pay"><Link href={"/interface/consultant/boiteaoutils/cvtheque/" + val.candidat_id} className="link-cv">Voir le CV en détail</Link></button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>)
                            }
                        }).map((val, key) => {
                            return (
                                <div className="cvCards-container">

                                    <div id="card">
                                        <div id="content">
                                            <div id="title">
                                                Candidat nom: {val.user_firstname}
                                            </div>
                                            <div id="title">
                                                Candidat prénom: {val.user_name}
                                            </div>
                                            <div id="desc">
                                                Travail recherché: {val.searched_job1}
                                            </div>


                                            <div id="info-box">

                                                <button className="btn--pay"><Link href={"/interface/consultant/boiteaoutils/cvtheque/" + val.candidat_id} className="link-cv">Voir le CV en détail</Link></button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            );
                        })}

                    </div>
                    {/*                   <div className="cvCards-container">

                        {cvs.map(cv =>

                            <div id="card">
                                <div id="content">
                                    <div id="title">
                                        Candidat nom: {cv.user_firstname}
                                    </div>
                                    <div id="title">
                                        Candidat prénom: {cv.user_name}
                                    </div>
                                    <div id="desc">
                                        Travail recherché: {cv.searched_job1}
                                    </div>


                                    <div id="info-box">

                                        <button className="btn--pay"><Link href={"/interface/consultant/boiteaoutils/cvtheque/" + cv.candidat_id} className="link-cv">Voir le CV en détail</Link></button>
                                    </div>
                                </div>
                            </div>

                        )}
                    </div> */}
                </div>
            </Consultant_layout>
        </div >
    )
}

export default allcv;

export const getStaticProps = async () => {

    const response = await axios.get("http://localhost:3080/getCVUser");

    /*     console.log("response data is", response.data);
     */
    return {
        props: {
            cvs: response.data

        }
    }
}

export async function getInitialProps({ query }) {
    return { query }
}
