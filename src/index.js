import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'
// import reportWebVitals from './reportWebVitals';


const Foo = ({name}) => {
  return(
    <div>
      <p>This is Foo component. It's name is {name}</p>
    </div>
    
  )
}
//bu bi anynomus function ve props bir argument 
const Item = (props) => {
  console.log(props)
  return(
    <div>
      <p>This is an Item Component. It's name is {props.name}</p>
      <Foo name={'adsfsfd'}/>
      {item}
    </div>
  )
}

const item= <p>This is an item</p>
const element= <div>
  <h1>Hello element</h1>
  <p>This is test</p>
  {item}
  {item}
  <Item name={'faize'}/>

</div>

 
ReactDOM.render(
   //<React.StrictMode>
   <div>
   <Button primary>Primary</Button>
   <Button secondary>Secondary</Button>
 </div>,
    /* index.html içinde ki root kısmında app i yerleştiriyo app kısmını silip h1 da yazarbilrisin sadece düz html olur */
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
