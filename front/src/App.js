import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import Header from './Components/Header/index';
import Home from './Screens/Home/homepage';
import Login from './Screens/Login/index';
import Perfil from './Screens/Perfil/index';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';
import { BrowserRouter as Router, Redirect,} from "react-router-dom";

function App() {

  // função customizada de exemplo
  const alertTeste = (page) => {
    switch (page) {
      // opções do menu da esquerda
      case "home":
        alert("Voltar para a Home")
        break
      case "contato":
        alert("Entrar na aba de contato")
        break
      case "sobre nós":
        alert("Entrar na aba Sobre Nós")
        break
      case "cursos":
        alert("Entrar na aba de Cursos")
        break
      
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
    <>
    <Router>
      <Routes>
        <Route exact path="/" component={<Home/>} />
        <Route exact path="/login" component={<Login/>} />
        <Route exact path="/perfil" component={<Perfil/>} />
      </Routes>
    </Router>
    
    <header className="App">
      <Header 
        logo="Prosiga"
        pages={["home", "contato", "sobre nós", "cursos", "opção5"]}
        settings={['Perfil', 'Meus Cursos', 'Descobrir Cursos', 'Logout']}
        funcaoCustomizada={alertTeste}
        iconeEscolhido={renderIcon}
      />
    </header>
    <body>
      <Home />
    </body>
    </>
  );
}

export default App;
