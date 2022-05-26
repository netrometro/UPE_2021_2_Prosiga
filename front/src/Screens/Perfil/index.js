import React from "react"; 
import Header from "../../Components/Header/index" 
import Card from "../../Components/Card/index" 
import { Link } from "react-router-dom"; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; 
import Masculino from '../../Assets/usuario-masculino.png'; 
import Grid from '@mui/material/Grid'; 
import { Button } from '@mui/material'; 
 
 const Perfil = () => {
   // função de ícone da sua escolha
   const renderIcon = () => {
       return <AccountCircleIcon />
   }
    const redefinirimagem = () => {
        alert("Trocar imagem")
   }
    const editarperfil = () => {
        alert("Editar Perfil")
    }
    return ( 
        <div> 
            <Header 
                logo="Prosiga" 
                pages={[<Link to="/">Home</Link>, <Link to="/cursos">Cursos</Link>]} 
                settings={["Logout", "Descobrir Cursos"]} 
                iconeEscolhido={renderIcon} 
                funcaoCustomizada={() => { }} 
            /> 
            <br></br> 
            <Card 
                titulo="Nome de Usuário"
                imagem= {Masculino}
                textoBotao= "Trocar Foto"
                acessarCurso={redefinirimagem}

                />    
                 <Grid container spacing={1}>
                
                <Grid item xs={2}>
                    Usuario:
                </Grid> 
                <Grid item xs={9}>
                 [usuario]
                </Grid> 
                <Grid item xs={2}>
                 Idade:
                </Grid >
                <Grid item xs={9}>
                 [XX]
                </Grid> 
                <Grid item xs={2}>
                 E-mail:
                </Grid> 
                <Grid item xs={10}>
                 [E-mail]
                </Grid> 
                <Grid item xs={2}>
                 Cursos:
                </Grid>
                <Grid item xs={10}>
                    [Curso 1]
                    [Curso 2]
                </Grid> 
                <Button variant="contained"> 
                 Editar
                </Button> 
            </Grid> 
        </div> 
    ) 
} 

export default Perfil;