import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemContainer from './components/itemlistcontainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemContainer greetings="Esto es un mensaje para la entrega del desafio 2"/>

    </div>
  );
}

export default App;
