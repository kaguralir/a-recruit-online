import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import ReactPlayer from 'react-player'
import AnimatedCustomButton from '../components/others/animated_button'
import Footer from '../components/footer/wavy-footer'
import Header from '../components/header/home_header'

export default function Home() {
  return (
    <div className="Home">
      <Head>
        <title>A recruit | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" media="screen" href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,700" />
        <script
          src="https://kit.fontawesome.com/342a0be6e2.js"
          crossorigin="anonymous"
        ></script>
      </Head>


      <main>
        <div className="container">

          <div className="head  orientationV">
            <div className="background">
              <div className="head-head">
                <Header />
                <div className="head-txt center orientationV">
                  <div className="lead">VOTRE AGENCE DE RECRUTEMENT</div>
                  <div className="orientationH center redirect">
                    <Link href="/interface/candidat">
                      <a>
                        <div>Je suis candidat</div>
                      </a>
                    </Link>
                    <Link href="/interface/recruteur">
                      <a>
                        <div>Je suis recruteur</div>
                      </a>
                    </Link>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="wave" version="1.1" width="100%" height="50" preserveAspectRatio="none" viewBox="0 0 1440 50">
                    <g mask="url(&quot;#SvgjsMask1022&quot;)" fill="none">
                      <path d="M 0,8 C 36,16.4 108,48.2 180,50 C 252,51.8 288,21 360,17 C 432,13 468,32.6 540,30 C 612,27.4 648,4.2 720,4 C 792,3.8 828,26.4 900,29 C 972,31.6 1008,17 1080,17 C 1152,17 1188,28 1260,29 C 1332,30 1404,23.4 1440,22L1440 50L0 50z" fill="#fff"></path>
                    </g>
                    <defs>
                      <mask id="SvgjsMask1022">
                        <rect width="1440" height="50" fill="#ffffff"></rect>
                      </mask>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="orientationV center">
            <div className="bigTitle">Excepteur commodo ad ullamco pariatur velit do.</div>
            <div className="smallTitle">Incididunt mollit adipisicing ea do nisi minim cupidatat proident. Mollit consequat est do anim velit in. Sunt quis consectetur consequat quis labore nisi. Amet incididunt esse est aliqua labore labore aute exercitation et adipisicing ullamco.</div>
          </div>

          <div className="steps">
            <div className="bigTitle">Excepteur commodo ad ullamco pariatur</div>
            <div className="steps-steps">
              <div className="step center">
                <div>1</div>
                <div>Quelfkjdlk</div>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />

    </div>
  )
}
