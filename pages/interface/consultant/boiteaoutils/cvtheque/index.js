

import Link from 'next/link';
import { api } from '../../../../api/api'


import { GetStaticProps, NextPage } from "next";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head'
import Consultant_layout from '../../../../../components/layouts/consultant_layout'



const allcv = ({ cvs }) => {

    return (
        <div>
            <Head>
                <title>A recruit | CV Thèque</title>
            </Head>

            <Consultant_layout
                position="cvtheque"
            >
                <div>
                    <h1>Liste de CV</h1>
                </div>
                <div className="cvCards-container">

                    {cvs.map(cv =>

                        <div id="card">
                            <div id="content">
                                <div id="title">
                                    Candidat n°: {cv.candidat_id}
                                </div>
                                <div id="desc">
                                    Travail recherché : {cv.searched_job1}
                                </div>


                                <div id="info-box">

                                    <button className="btn--pay"><Link href={"/interface/consultant/boiteaoutils/cvtheque/" + cv.candidat_id} className="link-cv">Voir le CV en détail</Link></button>
                                </div>
                            </div>
                        </div>

                    )}
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
