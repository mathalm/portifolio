import React from 'react';
import json from '../../../api.json'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Helmet from 'react-helmet'
import svg from '../../../images/SVGport.png'
import './styles.css'

function Certificados() {

  

  return (
    <section className='secao-certificados'>
        <Helmet title="Portifólio" >
                <link rel="icon" type="image/png" href={svg} sizes="16x16" />
             </Helmet>
      <div >
        <Carousel autoPlay={true} infiniteLoop={true} width="50%"  autoFocus={false}>

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