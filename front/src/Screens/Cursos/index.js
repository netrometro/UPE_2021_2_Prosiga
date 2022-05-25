import React from "react";
import './App.css';
import Header from '../../Components/Header/index';
import Card from '../../Components/Card/index';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Grid } from '@mui/material';
import Upe from '../../Assets/upe-vector.png'

function Cursos() {

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
      default:
        alert(page)
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
      <h1>Todos os Cursos</h1>
      <hr></hr>
      <Grid container spacing={1} columns={12}>
        <Grid item xs={3}>
          <Card
            titulo="Engenharia de Software"
            acessarCurso={alertTeste}
            imagem={Upe}
          />
        </Grid>
        <Grid item xs={3}>
          <Card
            titulo="História"
            imagem={Upe}
          />
        </Grid>
        <Grid item xs={3}>
          <Card
            titulo="Psicologia"
            imagem={Upe}
          />
        </Grid>
        <Grid item xs={3}>
          <Card
            titulo="Medicina"
            imagem={Upe}
          />
        </Grid>
        <Grid item xs={3}>
          <Card
            titulo="Medicina"
            imagem={Upe}
          />
        </Grid>
        <Grid item xs={3}>
          <Card
            titulo="Medicina"
            imagem={Upe}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Cursos;