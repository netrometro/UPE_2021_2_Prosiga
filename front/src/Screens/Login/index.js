import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from "../../Components/Header/index";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const theme = createTheme();

export default function SignIn() {

     const handleSubmit = (event) => {
         event.preventDefault();
         const data = new FormData(event.currentTarget);
         console.log({
             email: data.get('email'),
             senha: data.get('senha')
         });
     };

     const alertTest = (page) => {
         switch (page) {
            case "opção1":
                alert("Voltar para home")
                break
            case "opção2":
                alert("Entrar na aba de contato")
                break
            case "opção3":
                alert("Entrar na aba Sobre Nós")
                break

            case "Registrar":
                alert("Acessar página de cadastro ")
                break
         }
     }

     const renderIcon = () => {
        return <AccountCircleIcon/>
    }

     return (
         <div>
            <Header 
            logo="Teste"
            pages = {["opção1", "opção2", "opção3"]}
            settings={['Registrar']}
            funcaoCustomizada={alertTest}
            iconeEscolhido={renderIcon}
            />
            <ThemeProvider theme={theme}>
                <Container component="main" max Width="xs">
                    <CssBaseline />
                    <Box 
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    >
                        <Avatar sx={{m:1, bgcolor: 'secondary.main'}}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt:1}}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Endereço de email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="senha"
                                label="senha"
                                type="senha"
                                id="senha"
                                autoComplete="senha-atual"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remeber" color="primary"/>}
                                label="Lembrar da senha"
                            />
                            <Button 
                                type="enviar"
                                fullWidth
                                variant="contained"
                                sx={{mt:3, mb:2}}
                            >
                                Login 
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="null" variant="body2">
                                        Esqueceu a senha?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="null" variant="body2">
                                        Fazer cadastro
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </div>
     );
}