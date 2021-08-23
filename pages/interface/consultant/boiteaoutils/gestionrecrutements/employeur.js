import React, { Component,useState } from 'react'
import Head from 'next/head'
import Header from '../../../../../components/header/header'
import cookie from 'cookie'
import jwt_decode from 'jwt-decode'
import Footer from '../../../../../components/footer/footer'
import Link from 'next/link'

export default function employeur() {
    
    const [showhide,setShowHide]=useState(false)


    return (
        <>
            <Head>
                <title>A recruit | Consultant</title>
            </Head>

            <div className="gestionrecrutements">
                <Header/>
                <div className="orientationH">
                  
                    <div className="body">
                        
                        <div className="titleContainer center orientationH spaceBetween">
                            <Link href="/interface/consultant/boiteaoutils">
                              <a className="back"> 
                                &#xab;&#160;ESPACE DE GESTION DE RECRUTEMENT
                              </a>
                            </Link>
                            <div></div>
                        </div>
                        <div className="employeur orientationH">

                            <div className="reference" disabled="true">
                                <div>
                                    <label>Référence : 210825</label>
                                </div>
                                <br></br>

                                <div className="champs orientationV">
                                    <div> Raison sociale : </div>
                                    <input type="text"placeholder="ANTS Courtier en Travaux"/>
                                </div>
                                  <div className="champs orientationV">
                                    <div> Type d’entreprise : </div>
                                    <input type="text"placeholder=" SAS"/>
                                </div>
                                  <div className="champs orientationV">
                                    <div> RCS de : </div>
                                    <input type="text"placeholder=" Besançon"/>
                                </div>
                                  <div className="champs orientationV">
                                    <div> Numéro : : </div>
                                    <input type="text"placeholder=" 493 543 433 00061"/>
                                </div>
                                  <div className="champs orientationV">
                                    <div> Siège sociale : </div>
                                    <input type="text"placeholder=" 2 rue Bertrand Russel"/>
                                </div>
                                  <div className="champs orientationV">
                                    <div> Ville : </div>
                                    <input type="text"placeholder=" Besançon"/>
                                </div>
                                  <div className="champs orientationV">
                                    <div>  Code postal : </div>
                                    <input type="text"placeholder=" 25000"/>
                                </div>
                                
                                  <div className="champs orientationV">
                                    <div>  Représentant : </div>
                                    <input type="text"placeholder=" M. DRISSI Gherici"/>
                                </div>
                                  <div className="champs orientationV">
                                    <div>  Qualité : </div>
                                    <input type="text"placeholder=" Président"/>
                                </div>
                                  <div className="champs orientationV">
                                    <div>  Téléphone : </div>
                                    <input type="text"placeholder="06 32 61 59 75"/>
                                </div>
                                  <div className="champs orientationV">
                                    <div>  Mail : </div>
                                    <input type="text"placeholder="contact@ants-courtiertravaux.com"/>
                                </div>
                                  <div className="champs orientationV">
                                    <div>  Site : </div>
                                    <input type="text"placeholder="www.ants-courtiertravaux.com"/>
                                </div>
                                  <div className="champs orientationV">
                                    <div>  Activité : </div>
                                    <input type="text"placeholder="Courtage en travaux"/>
                                </div>
                                  <div className="champs orientationV">
                                    <div>  Masse salarial : </div>
                                    <input type="text"placeholder="- 50"/>
                                </div>
                                  <div className="champs orientationV">
                                    <div>  Zone d’activité : </div>
                                    <input type="text"placeholder="France entière"/>
                                </div>
                                <div className=" orientationV">
                                    <div className="end">Statut A RECRUIT : <label>Prospect</label></div>
                                </div>
                                <div> (en attente de validation du contrat)</div>
                                <div >
                                    <input className="btn" type="submit" value="Modifier"/>
                                    <div className="btn">Imprimer</div>
                                </div>
                                <br></br>

                                  <div className="champs orientationV">
                                    <div>
                                        <label>Edition de documents</label>
                                    </div>
                                   <br></br>
                                    <div className="orientationV ">
                                        <div className="btn">Devis</div>
                                        <div className="btn">Contrat</div>
                                    </div>

                                </div>
                            </div>
                            <div className="recrutement">
                                <div>
                                    <label>Recrutements</label>
                                </div>
                                <br></br>

                                <div className="champs orientationH">
                                    <div> 1. Intitulé du poste :</div>
                                    <input type="text"placeholder=" Courtier en Travaux"/>
                                </div>
                                  <div className="champs orientationH">
                                    <div> 2. Type de poste : </div>
                                    <input type="text"placeholder=" Itinérant / Sédentaire"/>
                                </div>
                                  <div className="champs orientationH">
                                    <div> 3. Type de contrat : </div>
                                    <input type="text"placeholder=" Franchise / Licence"/>
                                </div>
                                  <div className="champs orientationH">
                                    <div> 4. Type de rémunération : </div>
                                    <input type="text"placeholder=" %CA"/>
                                </div>
                                  <div className="champs orientationH">
                                    <div> 5 . Rem. annuelle brut : : </div>
                                    <input type="text"placeholder=" 45K € / 55K € "/>
                                </div>
                                  <div className="champs orientationH">
                                    <div> 6. Pays : </div>
                                    <input type="text"placeholder=" France"/>
                                </div>
                                  <div className="champs orientationH">
                                    <div> 7. Departement: </div>
                                    <input type="text"placeholder="21 - 39 71"/>
                                </div>

                                <div>
                                    <label>Candidat</label>
                                </div>
                                <br></br>
                                
                                  <div className="champs orientationH">
                                    <div>  1. Expérience : </div>
                                    <input type="text"placeholder="0/6 mois "/>
                                </div>
                                  <div className="champs orientationH">
                                    <div>  2. Formation / Diplômes : </div>
                                    <input type="text"placeholder=" Niv. BAC"/>
                                </div>
                                  <div className="champs orientationH">
                                    <div>  3. Qualifications : </div>
                                    <input type="text"placeholder="---"/>
                                </div>
                                  <div className="champs orientationH">
                                    <div>  4. Permis : </div>
                                    <input type="text"placeholder="Exigé"/>
                                </div>
                                  <div className="champs orientationH">
                                    <div>  5. Vehicule : </div>
                                    <input type="text"placeholder="Exigé"/>
                                </div>

                                <div>
                                    <label>Autres compétences </label>
                                </div>
                                <br></br>
                                  <div className="champs orientationH">
                                    <div>  Indispensables : </div>
                                    <input type="text"placeholder="Courtage en travaux"/>
                                </div>
                                <div><p>- Commercial</p><p>- Prospection</p><p>- Negociation</p></div>
                                <div >
                                    <div className="btn w100">Ajouter une compétence</div>
                                </div>

                            </div>
                            <div className="renseignements">
                                <div>
                                    <label>Renseignements complémentaires </label>
                                </div>
                                <br></br>
                                <textarea value="Cillum labore cupidatat et cupidatat commodo fugiat id mollit dolor qui in. Quis amet pariatur non commodo et sint culpa quis culpa ad. Ullamco fugiat sunt aute labore esse esse laboris eu esse aliqua proident eiusmod nostrud. Fugiat aute consequat qui ex magna mollit amet sunt eu magna adipisicing minim commodo. Anim aliquip reprehenderit voluptate eu veniam irure laborum."/>  
                                <div className="pdf_view_icon w100" title="Ouvrir">Fiche de poste</div>
                                <div className="video_view_icon w100" title="Ouvrir">Présentation du réseau ANTS</div>
                                <div className="btn w100">Raprochement candidat</div>
                                <div className="orientationH spaceBetween">
                                    <div className="btn">Imprimer</div>
                                    <div className="btn" >Publier</div>
                                </div>
                                <div className="orientationH  spaceBetween">
                                        <div className="btn">Editer facture</div>
                                        <div className="btn">Editer relance</div>
                                    </div>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export async function getServerSideProps({ req }) {
    
  const user_cookie = cookie.parse(req ? req.headers.cookie || "" : document.cookie)
  
  if(user_cookie.me){
      
      const user = jwt_decode(JSON.stringify(user_cookie))
      let data=[]
  
      data=user
      //console.log(data)

      return {
          props: {
              data
          }
      }
  }

  return {
      redirect: {
          permanent: false,
          destination: "/auth/login?dest=consultant/boiteaoutils",
      },
      props:{message:"redirect"},
  }
}