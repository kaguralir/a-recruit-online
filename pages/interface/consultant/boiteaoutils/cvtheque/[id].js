/* 
const Details = () => {
    return (
        <div>
            <h1>Details Page</h1>
        </div>
    );
}

export default Details; */


import axios from "axios";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import Header from "../../../../../components/header/header";
import { api } from "../../../../api/api";
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head'
import Consultant_layout from '../../../../../components/layouts/consultant_layout'



const details = ({ cv }) => {
    return (
        <div>
            <Head>
                <title>A recruit | CV Thèque</title>
            </Head>

            <Consultant_layout
                position="cvtheque"
            >
                <h1>Details Page</h1>

                <div >


                    <h1>Cv en détail</h1>

                    {cv.map((val, key) => {
                        return (
                            <div >
                                <div
                                >
                                    {" Candidat profil "}
                                    <div >
                                        {val.searched_job1}
                                    </div>
                                    <div >
                                        {val.searched_job2}
                                    </div>
                                    <div >
                                        {val.searched_job3}
                                    </div>
                                </div>
                                <div>


                                </div>
                            </div>
                        );
                    })}


                </div>

            </Consultant_layout>

        </div>
    );
}

export default details;

export const getStaticPaths = async () => {
    const res = await fetch(`${api}/getallcvs`);
    const data = await res.json();

    // map data to an array of path objects with params (id)
    const paths = data.map(cv => {
        /* console.log("candidat id is ", cv.candidat_id.toString()) */
        return {
            params: { id: cv.candidat_id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async (id) => {
    try {
        // console.log("params id is", context.params?.id); OK
        //console.log("id is", id.params.id); OK
        console.log("id is", id.params.id);


        const response = await axios.get(`http://localhost:3080/getCVbyId/${id.params.id}`);
        /*  const response = await axios.get(`${api}/getCVbyId/${context.params?.id}`); */
        /* console.log("get static props data re", response.data); */
        console.log("data is", response.data);
        return {
            props: {
                cv: response.data
            }
        }
    } catch (e) {
        console.log(e)
        return {

            notFound: true
        }
    }
}


export async function getInitialProps({ query }) {
    return { query }
}



/* export const getStaticPaths = async () => {
    const res = await fetch(`${api}/getallcvs`);
    const data = await res.json();

    // map data to an array of path objects with params (id)
    const paths = data.map(cv => {
        console.log("candidat id is ", cv.candidat_id.toString())
        return {
            params: { id: cv.candidat_id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async (id) => {
    try {
        const response = await axios.get(`${api}/getallcvs`, {
            candidat_id: id,
        });
        console.log("get static props data re", response.data);
        return {
            props: {
                cv: response.data
            }
        }
    } catch (e) {
        console.log(e);
        return {

            notFound: true
        }
    }
}

 */