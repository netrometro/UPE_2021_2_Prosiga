import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import AvaliaçãoForm from './Screens/Avaliaçao/aluno-form';
import ProfessorForm from './Screens/Avaliaçao/prof-form';
import Cadastro from './Screens/Cadastro';
import Cursos from './Screens/Cursos/index';
import Home from './Screens/Home/homepage';
import Login from './Screens/Login/index'

export default function CustomRoutes() {
    return (
        <Routes>
            <Route 
                path="/" 
                element={<Home />}
            />
            <Route 
                path="/cursos" 
                element={<Cursos />}
            />
            <Route 
                path="/login" 
                element={<Login />}
            />
            <Route 
                path="/cadastro"
                element={<Cadastro />}
            />
            <Route 
                path="/avaliacao"
                element={<AvaliaçãoForm />}
            />
            <Route 
                path="/professorform"
                element={<ProfessorForm />}
            />
        </Routes>
    );
};
