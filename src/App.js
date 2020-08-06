import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import 'fontsource-roboto';

class App extends Component {

  render() {
    return (
      <Container component='article' maxWidth='sm' >
        <Typography variant="h3" align="center" component="h1" >Formuário de cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} />
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}
/*
function App() {
  return (
    <h1>Formuário de cadastro</h1>
  );
}
*/
export default App;
