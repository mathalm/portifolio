import React from 'react';
import json from '../../../api.json'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './styles.css'

function Certificados() {
  return (
    <section className='secao-certificados'>
      <div >
        <Carousel autoPlay={true} infiniteLoop={true} width="45%" autoFocus={false}>
          {json.map((certificado) => {
            return (
              <div key={certificado.id} className='certificado'>
                <p className='titulo-certificado'>{certificado.titulo}</p>
                <img src={certificado.imagem} alt="pdf" className='imagem-certificado' />
              </div>
            )
          })}
        </Carousel>
      </div>
    </section>
  );
}

export default Certificados;