import * as React from 'react';
import {createTheme, ThemeProvider } from '@mui/material/styles';




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
}