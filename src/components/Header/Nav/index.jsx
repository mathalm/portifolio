import React from 'react';
import { BsCodeSlash } from 'react-icons/bs'
import './styles.css'
function Nav() {
  return ( 
    <nav className='nav-area-total'>
        <div className='div-menu'>
          <ul>
            <div className="div-sobre-li">
              <li>Home</li>
            </div>
            <div className="div-sobre-li">
              <li>Projetos</li>
            </div>
            <div><BsCodeSlash size={40} color='white' className='BsCodeSlash'/></div>
            <div className="div-sobre-li">
              <li>Certificados</li>
            </div>
            {/* <div className="div-sobre-li">
              <li>Curriculo</li>
            </div> */}
            <div className="div-sobre-li">
              <li>Sobre</li>
            </div>
          </ul>
        </div>
      </nav>
   );
}

export default Nav;