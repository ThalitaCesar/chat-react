import React from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import {AiOutlineClose} from 'react-icons/ai';
import {SiChatbot} from 'react-icons/si';
import {BiSend} from 'react-icons/bi';
import {BsCheck2All} from 'react-icons/bs';
import styled from "styled-components";

const Container = styled.div `
width: 100vw;
`

export default class Login extends React.Component {

    state = {       
               
        valorInputUsuario: 'Thalita',
        valorInputMensagem: '',
        listadeMensagens : []
    }

    mudouInputMensagem = (event) => {
        this.setState({valorInputMensagem: event.target.value})
    }

    EnviarMensagem = () => {
        const novaMensagem = {
            usuario: this.state.valorInputUsuario,
            mensagem: this.state.valorInputMensagem
        }

        const mensagemPraEnviar = [...this.state.listadeMensagens, novaMensagem]

        this.setState({
            listadeMensagens: mensagemPraEnviar,
            valorInputMensagem: '',
        })        
    }

    render() {
        const Mensagens = this.state.listadeMensagens.map(
            (mensagem) => {
               return  <div className="d-flex flex-row d-flex justify-content-around 
               p-3 mr-2 p-3">
             <div className="chat-text bg-light text-dark p-3 rounded">
              
             { mensagem.mensagem}
             <span class="time-right d-flex flex-row-reverse"> <span> <BsCheck2All className="text-success"/></span>11:00
             </span> 
                </div>  

                <div className="avatar align-items-center p-3">
                <img src="https://icons.iconarchive.com/icons/icons-land/vista-people/256/Person-Female-Light-icon.png"
                style={{height: "60px"}}/>
               <div className="chat-name text-light">{mensagem.usuario} 
               </div> </div>

               </div> 
           })

        return (
            <Container className="container p-3 m-3 ">

                <div className="card card-bordered bg-dark" style={{height: "95vh"}}>

                <div className="card-header bg-info d-flex flex-row justify-content-between p-3 ">
                <IoIosArrowBack className="text-light"/>
                 <span className="card-title text-dark font-weight-bold"> ThaChat <SiChatbot/>
                 </span>
                 <AiOutlineClose className="text-light"/>
                 </div>

                <div className="card-body overflow-auto">
                <div className="chat-text bg-transparent text-light d-flex justify-content-center"> 29/03/2022</div>

                <div className="d-flex flex-row d-flex justify-content-around p-3 mr-2 p-3">
                <div className="avatar align-items-center p-3">
                <img src="https://icons.iconarchive.com/icons/icons-land/vista-people/256/Occupations-Technical-Support-Representative-Male-Dark-icon.png"
                style={{height: "60px"}}/>
                <div className="chat-name text-light"> Lucas
                </div>
                </div>
  
                <div className="chat-text bg-light text-dark p-3 rounded">
                 Bom dia, seja bem vindo ao nosso atendimento. 
                 Eu sou o Lucas, seu antendente virtual. Fique a vontade para expor 
                 suas dúvidas, reclamações ou pedir o atendimento de nossos atendentes a qualquer momento.
                <span className="time-right d-flex flex-row-reverse"> <span> <BsCheck2All className="text-success"/></span> 10:55 </span> </div>  
                </div> 
                    {Mensagens}
                </div>                
                   <div className="input-group ">
                    <textarea className="form-control" type="text"  placeholder="Mensagem" 
                    onChange={this.mudouInputMensagem} value={this.state.valorInputMensagem}></textarea>
                    <button className="btn btn-info mr-1" onClick={this.EnviarMensagem}>
                   <BiSend/> 
                    </button>
                </div>
                </div>
            </Container>
           

        ) 
    }
}
