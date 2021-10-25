

import Link from 'next/link';
import { api } from '../../../../api/api'


import { GetStaticProps, NextPage } from "next";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head'
import Consultant_layout from '../../../../../components/layouts/consultant_layout'
import { useState } from 'react';



const allcv = ({ cvs }) => {

    const [filter, setFilter] = useState("")


    const filterResults = (results, query) => {

        console.log(results)
        if (!query) {
            return [];
        }

        return results.filter((result) => {
            const postName = result.name.toLowerCase();
            return postName.includes(query.toLowerCase());
        });

    };
    const filteredResult = filterResults(cvs.data, filter);
    console.log(filteredResult);


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
                    <div className="w100 center orientationV">

                        <div className="search_bar w100">
                            <form onSubmit={(e) => { e.preventDefault(); }} role="search" className="w100">
                                <input className="w100" id="search" type="search" placeholder="Rechercher un CV" autoFocus autoComplete="off" required onChange={(e) => { setFilter(e.target.value) }} />
                            </form>
                            <ul>
                                {filteredResult.map((result) => (
                                    <li key={result.id} className="result">
                                        <Link href={{ pathname: result.origin === "Candidat" ? "/interface/consultant/boiteaoutils/gestionrecrutements/candidat" : "/interface/consultant/boiteaoutils/gestionrecrutements/recruteur", query: { id: result.id, type: result.origin } }}>
                                            <a>
                                                <div className="url">
                                                    {result.name + " ( " + result.origin + " ) "}
                                                </div>
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="cvCards-container">

                        {cvs.map(cv =>

                            <div id="card">
                                <div id="content">
                                    <div id="title">
                                        Candidat n°: {cv.candidat_id}
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
                    </div>
                </div>
            </Consultant_layout>
        </div >
    )
}

export default allcv;

export const getStaticProps = async () => {

    const response = await axios.get(`${api}/getallcvs`);
    /*    console.log("response data is", response.data); */


    return {
        props: {
            cvs: response.data

        }
    }
}

export async function getInitialProps({ query }) {
    return { query }
}
