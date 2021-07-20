import React from 'react'
import Link from 'next/link'

export default function footer() {
    return (
        <>
        <div className="footer orientationV spaceBetween">
            <div className="footer_links_container  orientationH spaceBetween">
                <div className="footer_link orientationV">
                    <Link href="/">
                        <a>Lien 1</a>
                    </Link>
                    <Link href="/">
                        <a>Lien 1</a>
                    </Link>
                    <Link href="/">
                        <a>Lien 1</a>
                    </Link>
                    
                </div>
                <div className="footer_link orientationV">
                    <Link href="/">
                        <a>Lien 1</a>
                    </Link>
                    <Link href="/">
                        <a>Lien 1</a>
                    </Link>
                    <Link href="/">
                        <a>Lien 1</a>
                    </Link>
                    
                </div>
                <div className="footer_sociaux">
                    <div>Nous suivre sur les réseaux siciaux ? 👇👇👇</div>
                    <div className=" orientationH">
                                <Link href="/">
                                    <a>
                                        <div className="instagrame"></div>
                                    </a>
                                </Link>

                                <Link href="/">
                                    <a>
                                        <div className="twitter"></div>
                                    </a>
                                </Link>

                                <Link href="/">
                                    <a>
                                        <div className="facebook"></div>
                                    </a>
                                </Link>

                                <Link href="/">
                                    <a>
                                        <div className="linkedin"></div>
                                    </a>
                                </Link>
                    </div>
                </div>
            </div>

            <span className="copyrigght center">© 2021 A-Recruit / Tous droits réservés</span>

            <style jsx>{`
            
                    .footer{
                        margin-top: 1em;
                        width:100%;
                        min-height: 150px;
                        background-color: var(--color-primary-light);
                        padding: 1em;
                        color: #fff;
                    }

                    .footer_link a{
                        color: #fff;

                    }

                    .footer_sociaux{
                        width:200px;
                    }

                    .instagrame,.twitter,.facebook,.linkedin{
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: 30px;
                        margin-top: 1em;
                        width: 40px;
                        height: 40px;
                    }

                    .instagrame{
                        
                        background-image: url("/images/instagrame.png");
                    }
                    .twitter{
                        
                        background-image: url("/images/twitter.png");
                    }
                    .facebook{
                        
                        background-image: url("/images/facebook.png");
                    }
                    .linkedin{
                        
                        background-image: url("/images/linkedin.png");
                    }

                    .copyrigght{
                        margin: 0.5em;
                        width: 100%;
                    }
                    @media screen and (max-width:500px){

                        .footer_links_container{
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            text-align: center;
                        }
                    }
            `}</style>

        </div>
        </>
    )
}
