import React from "react";
import Button from '@mui/material/Button';
import './aula.css';
import Header from '../../Components/Header/index';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from 'react-router-dom'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

  
const Aula = () => {
  // função customizada de exemplo
  const alertTeste = (page) => {
    switch (page) {
      // opções do menu da esquerda
      case "Home":
        //alert("Voltar para a Home")
        //break
        return <Link to="/"></Link>
      case "Contato":
        //alert("Entrar na aba de contato")
        //break
        return <Link to="/contato"></Link>
      case "Sobre Nós":
        //alert("Entrar na aba Sobre Nós")
        //break
        return <Link to="/sobre"></Link>
      case "Minhas aulas":
        return <Link to="/aula"></Link>
      
      // opções da direita
      case "Perfil":
        // alert("Acessar a página de perfil")
        // break
        return <Link to="/perfil"></Link>
      case "Meus Cursos":
        // alert("Ver seus cursos")
        // break
        return <Link to="/cursos"></Link>
        
    }
  }

  // função de ícone da sua escolha
  const renderIcon = () => {
    return <AccountCircleIcon />
  }

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div className="App">
      <Header 
        logo="Prosiga"
        pages={[<Link to="/" className="link-header" style={{ textDecoration: 'none'}}>Home</Link>,
          <Link to="/contato" className="link-header" style={{ textDecoration: 'none' }}>Contato</Link>,
          <Link to="/sobre" className="link-header" style={{ textDecoration: 'none' }}>Sobre nós</Link>, 
          <Link to="/aula" className="link-header" style={{ textDecoration: 'none' }}>Minhas aulas</Link>, ""]}
        settings={[<Link to="/perfil" className="link-icon" style={{ textDecoration: 'none'}}>Perfil</Link>,
          <Link to="/cursos" className="link-icon" style={{ textDecoration: 'none'}}>Meus Cursos</Link>,
          'Descobrir Cursos', 'Logout']}
        funcaoCustomizada={alertTeste}
        iconeEscolhido={renderIcon}
      />

      <div className="home">
          <div>
            <br></br>
            <h2>Minhas aulas</h2>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Semana 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              <p>Hatsune Miku é um software de voicebank para Vocaloid desenvolvida pela Crypton Future Media e seu antropomorfismo moe,
               uma menina de 16 anos de idade com longas maria-chiquinhas turquesa. Ela utiliza a tecnologia de sintetização de canto
                Vocaloid 2, Vocaloid 3 e Vocaloid 4 da Yamaha Corporation. Ela também usa Piapro Studio da Crypton Future Media, que é
                 um sintetizador de canto VSTi. Ela foi a segunda Vocaloid vendida com o motor do Vocaloid 2 e a primeira Vocaloid a
                  utilizar a versão japonesa do motor Vocaloid 2. Sua voz é modelada com base na dubladora japonesa Saki Fujita. A
                   personificação de Miku foi comercializada como uma ídolo virtual e já se apresentou em vários shows em palco como
                    uma projeção em 3D (retroprojeção em uma tela de vidro com revestimento especial). </p>
                <br></br>
                <p>Data da atividade: 1/Janeiro/2018</p>
                <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Aula finalizada" />
                </FormGroup>
                
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Semana 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              O Segundo Exercício será no dia 16/05. Os assuntos serão:<br></br>
              <br></br>  09 - Processadores
              <br></br>  10 - A Interface entre Processadores e Periféricos
              <br></br> 11 - Paralelismo em Máquinas Monoprocessadas
              <br></br>  12 - Operações Aritméticas
              <br></br>  13 - Arquiteturas Avançadas de Computadores
              <br></br>  14 - Sistemas de Armazenamento
              <br></br>  15 - Virtualização
              <br></br>  16 - Componentes dos Computadores (Revisão)
              <br></br>  17 - Histórico dos Processadores
                <br></br>
                <p>Data da atividade: 2/Maio/2022</p>
                <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Aula finalizada" />
                </FormGroup>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Semana 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              <p>Informações básicas para apresentação do projeto (slides) deve conter no mínimo:
              <br></br> - Título do projeto e nome dos integrantes da equipe;
              <br></br>  - Introdução (contexto, motivação, problema);
              <br></br>  - Objetivos;
              <br></br>  - Atividades desenvolvidas (fotos, prints);
              <br></br>  - Descrição do projeto
              <br></br>  - Resultados alcançados e /ou impactos esperados
              <br></br>  - Limitações e impedimentos 
              <br></br>  - Referências. </p>
                <br></br>
                <p>Data da atividade: 9/Maio/2022</p>
                <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Aula finalizada" />
                </FormGroup>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Semana 4</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
                <br></br>
                <p>Data da atividade: dia/mês/ano</p>
                <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Aula finalizada" />
                </FormGroup>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Semana 5</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
                <br></br>
                <p>Data da atividade: dia/mês/ano</p>
                <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Aula finalizada" />
                </FormGroup>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>      
      </div>
      
    </div>
    
  );
};
  
export default Aula;