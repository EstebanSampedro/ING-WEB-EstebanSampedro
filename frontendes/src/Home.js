import React,{Component} from 'react';
import logo from './images/sistema2.png'

export class Home extends Component{
    render(){
        return(
            <div className='Inicio'>
                <img src={logo} alt="inicialLogo"/>
                <h3>Gestiona tu personal de la manera más óptima posible!</h3>
            </div>
        )
    }
}