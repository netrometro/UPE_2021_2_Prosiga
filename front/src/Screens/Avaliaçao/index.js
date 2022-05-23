import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';



export default function AvaliaçãoForm() {
    
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
      };

    const theme = createTheme();
    
    
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <React.Fragment>
                    <Typography variant="h6" gutterBottom>
                        Avaliação
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="nome"
                                name="nome"
                                label="nome"
                                fullWidth
                                autoComplete="nome-completo"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="email"
                                name="email"
                                label="email"
                                fullWidth
                                autoComplete="email"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="Resposta01"
                                name="Resposta01"
                                label="Reposta pergunta 01"
                                fullWidth
                                autoComplete="Resporta pergunta-01"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="Resposta02"
                                name="Resposta02"
                                label="Reposta pergunta 02"
                                fullWidth
                                autoComplete="Resporta pergunta-02"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="Resposta03"
                                name="Resposta03"
                                label="Reposta pergunta 03"
                                fullWidth
                                autoComplete="Resporta pergunta-03"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="Resposta04"
                                name="Resposta04"
                                label="Reposta pergunta 04"
                                fullWidth
                                autoComplete="Resporta pergunta-04"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="Resposta05"
                                name="Resposta05"
                                label="Reposta pergunta 05"
                                fullWidth
                                autoComplete="Resporta pergunta-05"
                                variant="standard"
                            />
                        </Grid>
                        <React.Fragment>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <Button
                                    variant="container"
                                    onClick={handleNext}
                                    sx={{mt: 3, ml: 1}}
                                >
                                    Enviar respostas
                                </Button>
                            </Box>
                        </React.Fragment>
                    </Grid>
                  
                        </React.Fragment>
             </Container>        
        </ThemeProvider>    
    )


}