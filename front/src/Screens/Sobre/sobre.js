import React from "react";
import Button from '@mui/material/Button';
import './sobre.css';
import Header from '../../Components/Header/index';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from 'react-router-dom'

const Sobre = () => {

  // função customizada de exemplo
  const alertTeste = (page) => {
    switch (page) {
      // opções do menu da esquerda
      case "Home":
        //alert("Voltar para a Home")
        //break
        return <Link to="/"></Link>
      case "Contato":
        //alert("Entrar na aba de contato")
        //break
        return <Link to="/contato"></Link>
      case "Sobre Nós":
        //alert("Entrar na aba Sobre Nós")
        //break
        return <Link to="/sobre"></Link>
      
      // opções da direita
      case "Perfil":
        alert("Acessar a página de perfil")
        break
      case "Meus Cursos":
        alert("Ver seus cursos")
        break
    }
  }

  // função de ícone da sua escolha
  const renderIcon = () => {
    return <AccountCircleIcon />
  }

  return (
    <div className="App">
      <Header 
        logo="Prosiga"
        pages={[<Link to="/" className="link-header" style={{ textDecoration: 'none'}}>Home</Link>,
          <Link to="/contato" className="link-header" style={{ textDecoration: 'none' }}>Contato</Link>,
          <Link to="/sobre" className="link-header" style={{ textDecoration: 'none' }}>Sobre nós</Link>, "", ""]}
        settings={[<Link to="/perfil" className="link-icon" style={{ textDecoration: 'none'}}>Perfil</Link>,
          <Link to="/cursos" className="link-icon" style={{ textDecoration: 'none'}}>Meus Cursos</Link>,
          'Descobrir Cursos', 'Logout']}
        funcaoCustomizada={alertTeste}
        iconeEscolhido={renderIcon}
      />

      <div className="Sobre">
          <div>
            <span className="home-title">Sobre nós</span>
            <br></br>
            <div className="Sobre">
                <span className="home-text"> Somos alunos da cadeira de gerência de configuração,
                do curso de Engenharia de Softaware na UPE do campus Garanhuns. </span>
            </div>
          </div>
      </div>
    </div>
  );

};

export default Sobre;