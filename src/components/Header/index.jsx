import React, { useState, useMemo, useRef } from 'react';
import './styles.css';
import perfil from '../../images/perfil.jpg'
import BotaoWhatsapp from '../BotaoWhatsapp';
import ParticleJs from './ParticleJs';
import Nav from './Nav';
import DivApresentacao from './DivApresentacao';

function Header() {
  const [image, setImage] = useState();
  const [definirSrcImage, setDefinirSrcImage] = useState(true);
  const nomeVisitante = useRef();
  const [nomeVisitanteMudou, setNomeVisitanteMudou] = useState();
  const [mudarClasseModal, setMudarClasseModal] = useState(false); /*mudar aqui para aparecer o modal*/ 


  const handleInputImg = (event) => {
    setDefinirSrcImage(false)
    console.log(event);

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    }
    reader.readAsDataURL(event.target.files[0]);
  }

  // --------------modal------------------------------------------
  const handleAdicionandoNomeVisitante = (e) => {
    nomeVisitante.current = e.target.value;
  }
  const handleEnvioDoNome = () => {
    setNomeVisitanteMudou(nomeVisitante.current)
    setMudarClasseModal(false)
  }
  
  const handleEnvioDoNome2 = (e) => {
    if (e.key === 'Enter') {
      setNomeVisitanteMudou(nomeVisitante.current)
      setMudarClasseModal(false)

    }
  }

  return (
    <div className="header">
      
      {useMemo(() => { return (<ParticleJs />)},[])}
      <Nav />
      <header className='header-perfil-home'>
        <div className="div-img">
          <img src={!!definirSrcImage ? perfil : image} alt="foto Inicial" className='img-perfil' />
          <input type="file" className='file' onChange={handleInputImg} accept='image/*' />
        </div>
       <DivApresentacao nomeVisitanteMudou={nomeVisitanteMudou} />
      </header>
      <div className={!!mudarClasseModal ? "divModal" : "divModalEnviou"}>
        <h3>Olá! Tudo bem?? <br /> Primeiramente, gostaria de saber qual seu nome?</h3>
        <input type="text" onChange={handleAdicionandoNomeVisitante} onKeyPress={handleEnvioDoNome2} className='inputModal' placeholder='Exemplo: Matheus' />
        <button className='button-modal' onClick={handleEnvioDoNome}>Enviar</button>
      </div>
      <BotaoWhatsapp nomeVisitanteMudou={nomeVisitanteMudou} />
    </div>
  );
}

export default Header;