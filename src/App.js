import React from 'react';
import './App.css';
import { Input, Segment } from 'semantic-ui-react'
import PokedexHeader from './components/PokedexHeader';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      author:"@faizerturk",
      name: "Faize"
    }

    this.onChange=this.onChange.bind(this)
  }

  onChange(event,data){
    console.log(data.value)
    this.setState({
      name: data.value
    })
  }
//render is getting called every time you type a new keystroke because the keystroke is updating the internal state
  render() {
    console.log(this.state)
    return (
    <div className="App">
      <PokedexHeader author={this.state.author} name={this.state.name} />
      {/* <PokedexHeader author="@faize" name={"faize"} />*/}
      <Segment basic >
       <Input label={"input your name"} value={this.state.name} onChange={this.onChange} />
      </Segment>
    </div> 
  );
}
}
export default App; //app ksımını export ediyo burda 
//index.js de import
