import React, { Component } from 'react'
import Head from 'next/head'
import Header from '../../../components/header/consultant_header'
import Domaines from '../../../components/etiquettes/etiquette'
import Link from 'next/link'

export default function Consultant() {

        return (
            <>
                <Head>
                    <title>A recruit | Consultant</title>
                </Head>

            <div className="gestionrecrutements">
                <Header
                    interface="dashboard"
                />
                
                <div className="orientationH">
                   {/* <Menu/> */}
                     <div className="body">
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
                        </div>
                    </div>
                    </div>
                </div>
            </>
        )
    
}
