import React from 'react';
import './App.css';
import PokedexHeader from './components/PokedexHeader';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      name: "Faize"
    }
  }
  render() {
    return (
    <div className="App">
      <PokedexHeader author="@faizerturk" name={this.state.name} />
      {/* <PokedexHeader author="@faize" name={"faize"} />*/}
    </div> 
  );
}
}
export default App; //app ksımını export ediyo burda 
//index.js de import
 