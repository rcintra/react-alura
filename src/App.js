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
        <Typography variant="h3" align="center" component="h1" >Formulário de cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validarCpf={validarCpf} />
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

function validarCpf(cpf) {
  if (cpf.length !== 11) {
    return {valido: false, texto: "Cpf deve ter 11 digitos"}
  }
  return {valido: true, texto: ""}
}

export default App;
