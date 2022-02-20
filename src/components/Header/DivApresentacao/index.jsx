import React from 'react';
import { MdEmail } from 'react-icons/md'
import { SiInstagram, SiLinkedin, SiGithub, SiTwitter } from 'react-icons/si'
import './styles.css'

function DivApresentacao({nomeVisitanteMudou}) {
  

  return ( 
    <div className='div-global-inicial'>
      <div className="div-apresentacao">
          <h1>Bem vindo, {nomeVisitanteMudou}!</h1>
          <h2>Meu nome é Matheus Almeida <br/> e sou estudante de desenvolvimento web.</h2>
          <ul className='ul-redes-sociais'>
            <li>
              <SiInstagram size={23}/>
              <span>https://www.instagram.com/alm_58/</span>
            </li>
            <li><SiLinkedin size={23}/> <span>https://www.linkedin.com/in/matheus-almeida-0929b01b7/</span></li>
            <li><SiGithub size={23}/> <span>https://github.com/mathalm</span></li>
            <li><SiTwitter size={23}/> <span>Não tenho 😅</span></li>
            <li><MdEmail size={23}/> <span>matheuscsalmeida@gmail.com</span></li>
          </ul>
        </div>
          
    </div>
   );
}

export default DivApresentacao;