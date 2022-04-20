import React, { useRef, useState } from 'react';
import { SiWhatsapp } from 'react-icons/si'
import { BiArrowBack } from 'react-icons/bi'
import { BsEmojiSmile } from 'react-icons/bs'
import { FiPaperclip } from 'react-icons/fi'
import { FaCamera } from 'react-icons/fa'
import { IoIosSend } from 'react-icons/io'
import perfil from '../../images/perfil.jpg'
import './styles.css'


function BotaoWhatsapp({ nomeVisitanteMudou }) {
  const [mostrarModalWhats, setMostrarModalWhats] = useState(false); //mudar aqui para esconder
  const [mostrarParagrafo, setMostrarParagrafo] = useState(false);//mudar aqui para esconder
  const [mostrarParagrafo2, setMostrarParagrafo2] = useState(false);//mudar aqui para esconder
  const [mostrarParagrafo3, setMostrarParagrafo3] = useState(false);//mudar aqui para esconder
  const [haMensagem, setHaMensagem ] = useState(false);
  const [hora, setHora] = useState();
  const [minuto, setMinuto] = useState();
  const [mensagens, setMensagens] = useState([]);

  const mensagemvisitante = useRef();

  const handleApareceWhats = () => {
    setMostrarModalWhats(!mostrarModalWhats)
    console.log(mostrarModalWhats);
    var data = new Date();
    setTimeout(() => {
      setMostrarParagrafo(true)
      setHora(data.getHours());
      setMinuto(data.getMinutes());
    }, 2000)
    setTimeout(() => {
      setMostrarParagrafo2(true);
    }, 4000)
    setTimeout(() => {
      setMostrarParagrafo3(true);
    }, 7000)


  }

  const handleMensagemVisitante = (e) => {
    if(document.getElementById('input-modal').value.length > 0){
      mensagemvisitante.current = e.target.value;
      console.log(mensagemvisitante.current)
      setHaMensagem(true)
    }else{
      setHaMensagem(false)
    }
  }

  const handleEnvioMensagem = () => {
    if(document.getElementById('input-modal').value.length > 0){
      setMensagens([...mensagens, mensagemvisitante.current])
      console.log(mensagens);
      var campoInput = document.querySelector('.input-modal');
      campoInput.value = ''
  
      var data = new Date();
      setHora(data.getHours());
      setMinuto(data.getMinutes());
      setHaMensagem(false)

    }
  }



  return (
    <div className='div-botao-whats'>
      <div className={!!mostrarModalWhats ? 'aparecer-modal-whats' : 'modal-esconder-whats'}>
        <div>
          <div className='cabeçalho-modal-whats'>
            <BiArrowBack className='biArrowBack' onClick={handleApareceWhats} />
            <img src={perfil} alt="Foto de perfil" className='foto-perfil-modal-whats' />
            <div className='div-nome-e-status'>
              <h2 className='titulo-nome-modal'>Matheus</h2>
              <p className='paragrafo-status'>{!!mostrarParagrafo3 ? 'online' : 'digitando...'}</p>
            </div>
          </div>
          <div className='div-contem-paragrafos'>
            <div className='div-contem-paragrafos-child'>
              <div className='testando'>
                <div className={!!mostrarParagrafo ? 'aparece-paragrafo' : 'esconder-paragrafo'}>
                  <p>Olá, {nomeVisitanteMudou}.</p>
                  <div className='div-hora-minuto'>
                    <p className='hora-mensagem'>{hora}:{minuto}</p>
                  </div>
                </div>
                <div className={!!mostrarParagrafo2 ? 'aparece-paragrafo-segundo' : 'esconder-paragrafo'}>
                  <p>Tudo bem com você?</p>
                  <div className='div-hora-minuto'>
                    <p className='hora-mensagem'>{hora}:{minuto}</p>
                  </div>
                </div>
                <div className={!!mostrarParagrafo3 ? 'aparece-paragrafo-terceiro' : 'esconder-paragrafo'}>
                  <p>Clique <a href="https://wa.me/5548984517059?text=Olá%2C%20Matheus%21%20Peguei%20seu%20número%20através%20do%20site%20%27Portifolio%27." target="_blank" rel="noreferrer">aqui</a> se quiser conversar melhor.</p>
                  <div className='div-hora-minuto'>
                    <p className='hora-mensagem'>{hora}:{minuto}</p>
                  </div>
                </div>
              </div>
              <div className='div-engloba-mensagens-visitantes'>
                {mensagens.map((mensagem, index) => {
                  return (
                    <div className='mensagem-visitante'>
                      <p key={index} className='paragrafo-mensagem-visitante'>{mensagem}</p>
                      <div className='div-hora-minuto'>
                        <p className='hora-mensagem'>{hora}:{minuto}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

            </div>
          </div>
          <div className='div-input-modal-whats'>
            <div className='div-input-modal-whats-child'>
              <BsEmojiSmile className='icon-geral' />
              <textarea type="text" rows={1} className='input-modal' id='input-modal' placeholder='Escreva aqui...' onChange={handleMensagemVisitante} />
              <FiPaperclip className='icon-geral FiPaperclip' />
              <FaCamera className='icon-geral' />
            </div>
            <div className={!!haMensagem ? 'botao-gravar-enviar-mensagem' : 'input-vazio'} onClick={handleEnvioMensagem}>
              <IoIosSend className='icon-geral'  />
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