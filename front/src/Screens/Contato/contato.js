import React from "react";
import Button from '@mui/material/Button';
import './contato.css';
import Header from '../../Components/Header/index';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from 'react-router-dom'

const Contato = () => {

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
      case "Minhas aulas":
        return <Link to="/aula"></Link>
      
      // opções da direita
      case "Perfil":
        // alert("Acessar a página de perfil")
        // break
        return <Link to="/perfil"></Link>
      case "Meus Cursos":
        // alert("Ver seus cursos")
        // break
        return <Link to="/cursos"></Link>
        
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
          <Link to="/sobre" className="link-header" style={{ textDecoration: 'none' }}>Sobre nós</Link>, 
          <Link to="/aula" className="link-header" style={{ textDecoration: 'none' }}>Minhas aulas</Link>, ""]}
        settings={[<Link to="/perfil" className="link-icon" style={{ textDecoration: 'none'}}>Perfil</Link>,
          <Link to="/cursos" className="link-icon" style={{ textDecoration: 'none'}}>Meus Cursos</Link>,
          'Descobrir Cursos', 'Logout']}
        funcaoCustomizada={alertTeste}
        iconeEscolhido={renderIcon}
      />

      <div className="Sobre">
          <div>
            <span className="home-title">Contato</span>
            <br></br>
            <div className="Sobre">
                <span className="home-text"> Em caso de dúvidas ou algum problema </span>
                <br></br>
                <span className="home-text"> Entre em contato conosco </span>
                <br></br>
                <br></br>               
                <span className="home-text">  </span>        
                <span className="home-text">Email: exemplo@exemplo.com</span>
                <br></br>               
            </div>
          </div>
      </div>
    </div>
  );

};

export default Contato;