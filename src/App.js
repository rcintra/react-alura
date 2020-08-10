import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import 'fontsource-roboto';

import {validarCpf, validarSenha} from "./models/cadastro"

class App extends Component {

  render() {
    return (
      <Container component='article' maxWidth='sm' >
        <Typography variant="h3" align="center" component="h1" >Formulário de cadastro</Typography>
        <FormularioCadastro 
          aoEnviar={aoEnviarForm} 
          validacoes={{cpf:validarCpf, senha:validarSenha, nome:validarSenha}} />
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}



export default App;
