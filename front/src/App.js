import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/index';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function App() {

  // função customizada de exemplo
  const alertTeste = (page) => {
    switch (page) {
      // opções do menu da esquerda
      case "home":
        alert("Voltar para a Home")
        break
      case "contato":
        alert("Entrar na aba de contato")
        break
      case "sobre nós":
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

  // função de ícone da sua escolha
  const renderIcon = () => {
    return <AccountCircleIcon />
  }

  return (
    <div className="App">
      <Header 
        logo="Prosiga"
        pages={["home", "contato", "sobre nós", "opção4", "opção5"]}
        settings={['Perfil', 'Meus Cursos', 'Descobrir Cursos', 'Logout']}
        funcaoCustomizada={alertTeste}
        iconeEscolhido={renderIcon}
      />
    </div>
  );
}

export default App;
