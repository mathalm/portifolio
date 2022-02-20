import React, { useRef, useState } from 'react';
import { SiWhatsapp } from 'react-icons/si'
import { BiArrowBack } from 'react-icons/bi'
import { BsEmojiSmile } from 'react-icons/bs'
import { FiPaperclip } from 'react-icons/fi'
import { FaCamera } from 'react-icons/fa'
import { IoIosSend } from 'react-icons/io'
import perfil from '../../images/perfil.jpg'
import './styles.css'


function BotaoWhatsapp({nomeVisitanteMudou}) {
  const [mostrarModalWhats, setMostrarModalWhats] = useState(false); //mudar aqui para esconder
  const [mostrarParagrafo, setMostrarParagrafo] = useState(false);//mudar aqui para esconder
  const [mostrarParagrafo2, setMostrarParagrafo2] = useState(false);//mudar aqui para esconder
  const [hora, setHora] = useState();
  const [minuto, setMinuto] = useState();
  const mensagemvisitante = useRef();

  const [mensagens, setMensagens] = useState([]);


  const handleApareceWhats = () => {
    setMostrarModalWhats(!mostrarModalWhats)
    console.log(mostrarModalWhats);
    var data = new Date();
    setTimeout(() => {
      setMostrarParagrafo(!mostrarParagrafo)
      setHora(data.getHours());
      setMinuto(data.getMinutes());
    }, 2000)
    setTimeout(() => {
      setMostrarParagrafo2(!mostrarParagrafo2);
      setHora(data.getHours());
      setMinuto(data.getMinutes());
    }, 4000)

    console.log(hora);
  }

  const handleMensagemVisitante = (e) =>{
    mensagemvisitante.current = e.target.value;
   console.log(mensagemvisitante.current);
  }
  const handleEnvioMensagem = () =>{
    setMensagens([...mensagens , mensagemvisitante.current])
    console.log(mensagens);
    var campoInput = document.querySelector('.input-modal');
    campoInput.value = ''
  }

  return (
    <div className='div-botao-whats'> 
      <div className={!!mostrarModalWhats ? 'muda-aparecer-modal-whats' : 'modal-esconder-whats'}>
        <div>
          <div className='cabeçalho-modal-whats'>
            <BiArrowBack className='biArrowBack' onClick={handleApareceWhats} />
            <img src={perfil} alt="Foto de perfil" className='foto-perfil-modal-whats' />
            <div className='div-nome-e-status'>
              <h2 className='titulo-nome-modal'>Matheus</h2>
              <p className='paragrafo-status'>{!!mostrarParagrafo2 ? 'online' : 'digitando...'}</p>
            </div>
          </div>
          <div className='div-contem-paragrafos'>
            <div className='div-contem-paragrafos-child'>
              <div className={!!mostrarParagrafo ? 'aparece-paragrafo' : 'esconder-paragrafo'}>
                <p>Olá, {nomeVisitanteMudou}.</p>
                <p className='hora-mensagem'>{hora}:{minuto}</p>
              </div>
              <div className={!!mostrarParagrafo2 ? 'aparece-paragrafo-segundo' : 'esconder-paragrafo'}>
                <p>Tudo bem com você?</p>
                <p className='hora-mensagem'>{hora}:{minuto}</p>
              </div>
              <div className='testando'>
                {mensagens.map((mensagem, index) => {
                  return(
                    <p key={index} className='mensagem-visitante'>{mensagem}</p>
                  )
                })}
              </div>
            </div>
          </div>
          <div className='div-input-modal-whats'>
            <div className='div-input-modal-whats-child'>
              <BsEmojiSmile  className='icon-geral'/>
              <textarea type="text" rows={1} className='input-modal' placeholder='Escreva aqui...' onChange={handleMensagemVisitante} />
              <FiPaperclip className='icon-geral FiPaperclip' />
              <FaCamera className='icon-geral' />
            </div>
            <div className='botao-gravar-audio'>
              <IoIosSend className='icon-geral' onClick={handleEnvioMensagem} />
            </div>
          </div>
        </div>
      </div>
      <SiWhatsapp className='botao-whats' size={50} onClick={handleApareceWhats} />
    </div>
  );
}

export default BotaoWhatsapp;
;