import React from 'react';
import Certificados from './Certificados';
import Conhecimentos from './Conhecimentos';

import './styles.css';
function Main() {
  return (
    <main className='main'>
      <div>
        <h2>Conhecimentos</h2>
        <Conhecimentos />
      </div>
      <div className='div-certificados'>
        <h2>Certificados</h2>
        <Certificados/>
      </div>
    </main>
  );
}

export default Main;