import React from 'react';
import logoHtml from '../../../images/logo-html.png'
import logoCss from '../../../images/logo-css.png'
import logoJS from '../../../images/logo-js.png'
import logoReact from '../../../images/logo-react.png'
import './styles.css'

function Conhecimentos() {
  return (
    <section>
      <div className='conhecimentos'>
        <div className='div-conhecimentos'>
          <div className='logoC'>
            <img src={logoHtml} alt="logo-html" />
          </div>
          <div className='conteudo'>
            <ul>
              <li>DOM</li>
              <li>Tags</li>
              <li>Listas</li>
            </ul>
          </div>
        </div>
        <div className='div-conhecimentos'>
          <div className='logoC'>
            <img src={logoCss} alt="logo-css" />
          </div>
          <div className='conteudo'>
            <ul>
              <li>Flexbox</li>
              <li>Posições</li>
              <li>Animações</li>
            </ul>
          </div>
        </div>
        <div className='div-conhecimentos'>
          <div className='logoC'>
            <img src={logoJS} alt="logo-js" />
          </div>
          <div className='conteudo'>
            <ul>
              <li>Funções</li>
              <li>Condições</li>
              <li>Arrays</li>
            </ul>
          </div>
        </div>
        <div className='div-conhecimentos'>
          <div className='logoC'>
            <img src={logoReact} alt="logo-react" />
          </div>
          <div className='conteudo'>
            <ul>
              <li>Manipulação do DOM</li>
              <li>Hooks</li>
              <li>API</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Conhecimentos;