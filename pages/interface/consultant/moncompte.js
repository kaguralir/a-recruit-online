import React, { Component } from 'react'
import Head from 'next/head'
import Header from '../../../components/header/header'
import Menu from '../../../components/menu_consultant/menu'

export default class MonCompte extends Component {
    render() {
        return (
            <>
                <Head>
                    <title>A recruit | Consultant</title>
                </Head>
                <div className="gestionrecruteur">
                    <Header/>
                    <Menu
                        pos="moncompte"
                    />
                </div>
            </>
        )
    }
}