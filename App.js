import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { ImEnter } from 'react-icons/im';
import React from 'react';
import './style.css';
import logo from '../src/imagem/VagaOn-logo.png'

function App() {

  const [Cargo, setCargo] = useState('')

  function botaoPesquisar(){
      alert("Falha ao consultar o cargo: " + Cargo)
      setCargo("")
  }

  return (
    
    <div className="container">
      <div className='containerInput'>
        <input 
        type="text"
        placeholder='Cargo' 
        value={Cargo}
        onChange={(e) => setCargo(e.target.value)}/>

        <input 
        type="text"
        placeholder='Cidade'/>
      
      <button className='botaoProcurar' onClick={botaoPesquisar}>
        <FiSearch size={20} color='#FFF'/>
      </button>
    
      <div className='menu_top'>
      <img src={logo}/>

      <div>
        <button className='botaoEntrar'>
          <ImEnter size={25} color='#FFF'/>
          <input type="button"/>
        </button>
      </div>

    </div>
    </div>
    </div>
  );
}

export default App;
