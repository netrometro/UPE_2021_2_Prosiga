import React from "react";
import Button from '@mui/material/Button';
import './homepage.css';
  
const Home = () => {
  return (
    <div className="home">
      <p className="home-title">Bem vindo(a) ao Prosiga!</p>
      <Button variant="contained" size="large">Login / Cadastro</Button>
    
    </div>
  );
};
  
export default Home;