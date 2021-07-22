import React, { Component } from 'react'
import Header from '../../../components/header/header'
import Menu from '../../../components/menu_consultant/menu'

export default class Gestion_recrutement extends Component {
    render() {
        return (
            <div className="gestionrecruteur">
                <Header/>
                <Menu/>
            </div>
        )
    }
}
