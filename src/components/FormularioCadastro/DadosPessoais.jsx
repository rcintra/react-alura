import React, {useState} from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core'

function DadosPessoais({aoEnviar, validarCpf}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [errors, setErrors] = useState({cpf: {valido: true, texto:""}});

    return (
        <form onSubmit={(event => {
            event.preventDefault();
            aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
        })}>

            <TextField 
                onChange={(event => {
                    setNome(event.target.value);
                })}
                value={nome}
                id="nome" 
                label="Nome" 
                variant="outlined" 
                margin="normal" 
                fullWidth/>

            <TextField 
                onChange={(event => {
                    setSobrenome(event.target.value);
                })}
                value={sobrenome}
                id="sobrenome" 
                label="Sobrenome" 
                variant="outlined" 
                margin="normal" 
                fullWidth/>

            <TextField 
                onChange={(event => {
                    setCpf(event.target.value);
                })}
                onBlur={(event) => {
                    const ehValido = validarCpf(cpf);
                    setErrors({cpf: ehValido});
                }}
                value={cpf}
                error={!errors.cpf.valido}
                helperText={errors.cpf.texto}
                id="cpf" 
                label="CPF" 
                variant="outlined" 
                margin="normal" 
                fullWidth/>

            <FormControlLabel label="Promoções"
                control={
                    <Switch 
                        onChange={(event) => {
                            setPromocoes(event.target.checked)
                        }}
                        checked={promocoes}
                        id="promocoes" 
                        name="Promoções" 
                        defaultChecked={promocoes} 
                        color="primary" />
                }
            />

            <FormControlLabel label="Novidades"
                control={
                    <Switch
                        onChange={(event) => {
                            setNovidades(event.target.checked)
                        }}
                        checked={novidades} 
                        id="novidades" 
                        name="Novidades" 
                        defaultChecked={novidades} 
                        color="primary" />
                }
            />    
            
            <Button type="submit" variant="contained" color="primary">
                Cadastrar
            </Button>

        </form>
    );
}

export default DadosPessoais;