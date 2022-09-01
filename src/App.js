import './App.css';
import NavBar from './components/NavBar/NavBar'
import {ItemContainer} from './components/itemlistcontainer/ItemListContainer';
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
function App() {
  return (
    <div className="App">
            <NavBar/>

      <ItemContainer/>
    <ItemDetailContainer/>
    </div>
  );
}

export default App;
