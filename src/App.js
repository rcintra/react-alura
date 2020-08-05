import React, { Component, Fragment } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

class App extends Component {

  render() {
    return (
      <Fragment>
        <h1>Formuário de cadastro</h1>
        <FormularioCadastro />
      </Fragment>
    );
  }
}
/*
function App() {
  return (
    <h1>Formuário de cadastro</h1>
  );
}
*/
export default App;
