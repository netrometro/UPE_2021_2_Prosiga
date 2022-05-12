import React from "react";
import Button from '@mui/material/Button';
import './homepage.css';
import Header from '../../Components/Header/index';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
  
const Home = () => {
  // função customizada de exemplo
  const alertTeste = (page) => {
    switch (page) {
      // opções do menu da esquerda
      case "opção1":
        alert("Voltar para a Home")
        break
      case "opção2":
        alert("Entrar na aba de contato")
        break
      case "opção3":
        alert("Entrar na aba Sobre Nós")
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
    <div className="App">
      <Header 
        logo="Teste"
        pages={["opção1", "opção2", "opção3", "opção4", "opção5"]}
        settings={['Perfil', 'Meus Cursos', 'Descobrir Cursos', 'Logout']}
        funcaoCustomizada={alertTeste}
        iconeEscolhido={renderIcon}
      />

      <div className="home">
        <span className="home-title">Bem vindo(a) ao Prosiga!</span>
        <span className="home-subtitle">Escolha o seu curso e comece a estudar agora mesmo</span>
        <Button variant="contained" size="large">Login / Cadastro</Button>
        <span className="home-text">Assista as aulas, faça atividades e acompanhe suas notas de uma forma mais fácil e de onde quiser</span>
      
      </div>
    </div>
  );
};
  
export default Home;