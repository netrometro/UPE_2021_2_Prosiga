import React from "react";
import Button from '@mui/material/Button';
import './homepage.css';
  
const Home = () => {
  return (
    <div className="home">
      <span className="home-title">Bem vindo(a) ao Prosiga!</span>
      <span className="home-subtitle">Escolha o seu curso e comece a estudar agora mesmo</span>
      <Button variant="contained" size="large">Login / Cadastro</Button>
      <span className="home-text">Assista as aulas, faça atividades e acompanhe suas notas de uma forma mais fácil e de onde quiser</span>
    
    </div>
  );
};
  
export default Home;