import * as React from 'react';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import {createTheme, ThemeProvider } from '@mui/material/styles';
import { Avatar, Container, CssBaseline, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';




const theme = createTheme();

export default function Cadastro() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            senha: data.get('senha'),
        });
    };


return (
    <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m:1, bgcolor: 'secondary.main'}}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Cadastre-se
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="nome"
                                required
                                fullWidth
                                id="nome"
                                label="nome"
                                autoFocus
                            />    
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="sobrenome"
                                label="sobrenome"
                                name="sobrenome"
                                autoComplete="sobrenome"
                            />

                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Endereço de email"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="senha"
                                label="senha"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="Eu quero receber mensagnes via email."
                            />
                        </Grid>
                    </Grid>
                    <Button 
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt:3, mb:2}}
                    >
                        Cadastre-se
                    </Button>
                    <Grid item>
                        <Link href='#' variant="body2">
                            Já tem uma conta? faça o Login
                        </Link>
                    </Grid>
                </Box>
            </Box>
        </Container>
    </ThemeProvider>
);
}