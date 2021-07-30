import React ,{useState,useEffect} from 'react'
import Head from 'next/head'
import Header from '../../../../../components/header/consultant_boite_a_outils_header'
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

        <div className="placeaffaire">
            <Header
                interface="placeaffaire"
            />
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
