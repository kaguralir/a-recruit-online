import React, { useState, useEffect } from 'react'
import Head from 'next/head'

import Link from 'next/link'
import Consultant_layout from '../../../../../components/layouts/consultant_layout'
import cookie from 'cookie'
import axios from 'axios'
import { api } from '../../../../api/api'
import { useHistory } from "react-router-dom";




export default function index() {

    let history = useHistory()


    const [cv, setCV] = useState([]);

    /* http://localhost:3080/getallcvs */
    useEffect(() => {
        axios.get(`${api}/getallcvs`).then((response) => {
            setCV(response.data);
        });
    }, []);




    return (
        <>
            <Head>
                <title>A recruit | CV Thèque</title>
            </Head>

            <Consultant_layout
                position="cvtheque"
            >
                <p>Cv thèque liste </p>
                {cv.map((val, key) => {
                    return (
                        <div >
                            <div >
                                <div
                                >
                                    {" Candidat profil "}
                                    {val.candidat_id}
                                </div>
                                <div>
                                    {/*                                     <Link href={`${api}/getCVbyId/${id}`}>
                                        <button>Voir en détail</button>
                                    </Link> */}
                                </div>

                            </div>
                        </div>
                    );
                })}
            </Consultant_layout>


        </>
    )
}

export async function getServerSideProps({ req }) {

    const user_cookie = cookie.parse(req ? req.headers.cookie || "" : document.cookie)

    if (user_cookie.me) {
        let data = []

        //console.log(data)

        return {
            props: {
                data
            }
        }
    }

    return {
        redirect: {
            permanent: false,
            destination: "/auth/login?dest=consultant/boiteaoutils",
        },
        props: { message: "redirect" },
    }
}
