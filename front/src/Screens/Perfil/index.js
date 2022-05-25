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

    const redefinirSenha = () => {
        alert("Trocando senha")
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
                titulo="Nome do Usuário"
                imagem={Masculino}
                textoBotao="Trocar Senha"
                acessarCurso={redefinirSenha}
            />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    Username:
                </Grid>
                <Grid item xs={6}>
                    renan-upe
                </Grid>
                <Grid item xs={6}>
                    Idade:
                </Grid>
                <Grid item xs={6}>
                    20
                </Grid>
                <Grid item xs={6}>
                    E-mail:
                </Grid>
                <Grid item xs={6}>
                    renan@upe.br
                </Grid>
                <Button variant="contained">
                    Editar
                </Button>
            </Grid>
        </div>
    )
}

export default Perfil;