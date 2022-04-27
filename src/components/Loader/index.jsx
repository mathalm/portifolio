import React, { useState, useEffect } from 'react';
import './styles.css'

function Loader() {
  const [carregando, setCarregando] = useState(true);

  var state = document.readyState;
  useEffect(() => {
    setTimeout(() => {
      setCarregando(false);
      console.log('teste');
    }, 2000)
  }, [state])

  return (
    <div className={!!carregando ? "carregando div-loader-shadow" : "nao-carregando"}>
      {!!carregando ? console.log("carregando") : console.log("nao-carregando")}
      <div className='div-loader'>
        <div className='loader'></div>
      </div>
      <p>Carregando...</p>
    </div>
  );
}

export default Loader;