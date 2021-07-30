import React, { Component,useState } from 'react'
import Gestionrecrutements from './gestionrecrutements'

export default function index() {
    const [showhide,setShowHide]=useState(false)

    return (
        <>
            <Gestionrecrutements/>
        </>
    )
}
