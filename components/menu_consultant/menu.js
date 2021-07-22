import Link from 'next/link'
import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <>
                <div className="Menu_Consultant">
                    <Link href="/">
                        <a>
                            Acceuil
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            Mon compte
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            Boite à outil
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            Cv-thèque
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            Formations
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            Clients
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            Factures
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            Créer un compte candidat
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            Créer un compte client
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            Compte résultat
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            Gestion de mes recrutements
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            Services réclamation
                        </a>
                    </Link>
                </div>
                
            </>
        )
    }
}
