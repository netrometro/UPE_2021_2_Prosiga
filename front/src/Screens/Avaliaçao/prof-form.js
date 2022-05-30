import * as React from 'react';
import Header from "../../Components/Header/index";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Grid, createTheme, TextField, Button, ThemeProvider, CssBaseline, Container, Typography } from '@mui/material';
export default function ProfessorForm(props) {

    const [pergunta1, setpergunta1 ] = React.useState("")

    const[pergunta2, setpergunta2 ] = React.useState("")

    const[pergunta3, setpergunta3 ] = React.useState("")

    const[pergunta4, setpergunta4 ] = React.useState("")

    const[pergunta5, setpergunta5 ] = React.useState("")

    const theme = createTheme();

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
    const renderIcon = () => {
        return <AccountCircleIcon />
      }


    return (
        <div>
            <Header 
                logo="Teste"
                pages={["opção1", "opção2", "opção3", "opção4", "opção5"]}
                settings={['Perfil', 'Meus Cursos', 'Descobrir Cursos', 'Logout']}
                funcaoCustomizada={alertTeste}
                iconeEscolhido={renderIcon}
            />
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                    <Typography variant="h6" gutterBottom>
                            Inserir perguntas para Avaliação
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="pergunta1"
                                name="Pergunta 01"
                                label="Pergunta 01"
                                fullWidth
                                autoComplete="pergunta-01"
                                variant="standard"
                                defaultValue={pergunta1}
                                onChange={event => {
                                    const { value } = event.target;
                                    setpergunta1(value);
                                }}
                            />    
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="pergunta2"
                                name="Pergunta 02"
                                label="Pergunta 02"
                                fullWidth
                                autoComplete="pergunta-02"
                                variant="standard"
                                defaultValue={pergunta2}
                                onChange={event => {
                                    const { value } = event.target;
                                    setpergunta2(value);
                                }}
                            />    
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="pergunta3"
                                name="Pergunta 03"
                                label="Pergunta 03"
                                fullWidth
                                autoComplete="pergunta-03"
                                variant="standard"
                                defaultValue={pergunta3}
                                onChange={event => {
                                    const { value } = event.target;
                                    setpergunta3(value);
                                }}
                            />    
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="pergunta4"
                                name="Pergunta 04"
                                label="Pergunta 04"
                                fullWidth
                                autoComplete="pergunta-04"
                                variant="standard"
                                defaultValue={pergunta4}
                                onChange={event => {
                                    const { value } = event.target;
                                    setpergunta4(value);
                                }}
                            />    
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="pergunta5"
                                name="Pergunta 05"
                                label="Pergunta 05"
                                fullWidth
                                autoComplete="pergunta-05"
                                variant="standard"
                                defaultValue={pergunta5}
                                onChange={event => {
                                    const { value } = event.target;
                                    setpergunta5(value);
                                }}
                            />    
                        </Grid>
                        <Button
                            variant="container"
                            onClick={() => alert(pergunta1)}
                            sx={{mt: 3, ml: 1}}
                        >
                            Enviar perguntas
                        </Button>
                    </Grid>
                </Container>
            </ThemeProvider>
        </div>
    );
}