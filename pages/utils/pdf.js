import React from 'react'
import Head from 'next/head'
import Header from '../../components/header/header'
import PDFPreview from '../../components/others/pdfPreview'

export default function contrat({data}) {
    return (
        <div className="recruteur">

            <div className="interface-layout">
                <Head>
                    <title>A recruit | Recruteur</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                {/*---------------*/}
                <Header
                />
                {/*---------------*/}
                
                <main className="body pdf">
                    <br></br>
                    <br></br>

                    <div className="w100 center title">
                        MON CONTRAT
                    </div>
                    <PDFPreview
                        url= {data.url}
                    />
                
                    <div className="w100 center">
                        {data.tobesigned&&
                            <div className="btn">Signer</div>
                        }
                        <div className="btn">Télécharger</div>
                    </div>
                   
                </main>
            </div>
        </div>
    )
}


export async function getServerSideProps({ query }) {

    const data = {url:query.url,tobesigned:query.tobesigned,id: query.by}

    return{
        props:{
            data
        }
    }
}