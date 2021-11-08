import './App.css';
import PokedexHeader from './components/PokedexHeader';

function App() {
  return (
    <div className="App">
      <PokedexHeader author="@faizerturk" name={"Faize"} />
      {/* <PokedexHeader author="@faize" name={"faize"} />*/}
    </div> 
  );
}

export default App; //app ksımını export ediyo burda 
//index.js de import
