import './App.css';
import NavBar from './components/NavBar/NavBar'
import {ItemContainer} from './components/itemlistcontainer/ItemListContainer';
function App() {
  return (
    <div className="App">
            <NavBar/>

      <ItemContainer/>

    </div>
  );
}

export default App;
