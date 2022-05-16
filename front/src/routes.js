import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
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
        </Routes>
    );
};
