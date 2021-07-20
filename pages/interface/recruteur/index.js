import React,{useEffect,useState,Component} from 'react'
import ReactLocalStorage from 'reactjs-localstorage'
import jwt_decode from 'jwt-decode'

import Connexion from '../../authentification/connexion'
import Recrutor from './recrutor'

export default class index extends Component {

    state = {
        check:false,
    }

    componentDidMount(){
        const  localdata= ReactLocalStorage.reactLocalStorage.getObject('jwt')
        let  loded_user = '';

        try{
            loded_user = jwt_decode(JSON.stringify(localdata))
            this.setState({check:true}) 
            
        }catch(e){

            if(e){
                this.setState({check:false})
            }else{
                this.setState({check:true})
            }
        }
    }

    

    render() {
        return (
            <div>
                {this.state.check?<Recrutor/>:<Connexion dest='recruteur'/>}
            </div>
        )
    }
}
