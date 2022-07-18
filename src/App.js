//Importar Componentes
import Intro from './Components/intro/Intro';
import ProductList from './Components/Products/ProductList';
import Contact from './Components/Contact/Contact';
import Toggle from './Components/Toggle/Toggle';
import './App.css';
import { useContext } from 'react';
import { ThemeContext } from './Context';

function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style={{ backgroundColor:darkMode ? '#222' : 'white', color:darkMode && 'white' }}>
        <Toggle />
        <Intro />
        <ProductList />
        <Contact/>
    </div>
  );
}

export default App;
