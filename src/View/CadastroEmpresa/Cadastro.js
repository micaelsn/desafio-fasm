import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import BusinessIcon from '@material-ui/icons/Business';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Copyright from '../Components/Copyright';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Cadastro() {
  const classes = useStyles();
  const [cnpj, setCNPJ] = React.useState('');
  const[name, setName] = React.useState('');
  const[lname, setlname] = React.useState('');
  const[company, setcompany] = React.useState('');
  const[cpf, setcpf] = React.useState('');
  const[neighb, setneighb] = React.useState('');
  const[city, setcity] = React.useState('');
  const[cep, setcep] = React.useState('');
  const[complemento, setcomplemento] = React.useState('');
  const[state, setstate] = React.useState('');
  
  const handleSubmit = (event) => {
    console.log({
      'cnpj': cnpj, 'name': name, 'lname': lname, 'company':company, 'cpf': cpf, 
      'neighb': neighb, 'city': city, 'cep': cep, 'complemento': complemento, 
      'state': state
    })
    //Make a network call somewhere
    event.preventDefault();
    localStorage.setItem('empresa'+cnpj, JSON.stringify({
      'cnpj': cnpj, 'name': name, 'lname': lname, 'company':company, 'cpf': cpf, 
      'neighb': neighb, 'city': city, 'cep': cep, 'complemento': complemento, 
      'state': state
    }));

 }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <BusinessIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Cadastro de Empresa
        </Typography> 
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="cnpj"
                label="CNPJ"
                name="cnpj"
                autoComplete="cnpj"
                value={cnpj}
                onInput={ e=>setCNPJ(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="companyname"
                label="Razão Social"
                name="companyname"
                value={company}
                onInput={ e=>setcompany(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Primeiro Nome"
                value={name}
                onInput={ e=>setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Sobrenome"
                name="lastName"
                autoComplete="lname"
                value={lname}
                onInput={ e=>setlname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="cpf"
                label="CPF"
                name="cpf"
                autoComplete="cpf"
                value={cpf}
                onInput={ e=>setcpf(e.target.value)}
              />
            </Grid>
          {/* ENDEREÇO */}
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2">
                Endereço da empresa
              </Typography>
              <hr/>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="neighborhood"
                label="Bairro"
                name="neighborhood"
                autoComplete="neighborhood"
                value={neighb}
                onInput={ e=>setneighb(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="cep"
                label="CEP"
                name="cep"
                autoComplete="cep"
                value={cep}
                onInput={ e=>setcep(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="complemento"
                label="Complemento"
                name="complemento"
                autoComplete="complemento"
                value={complemento}
                onInput={ e=>setcomplemento(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="city"
                label="Cidade"
                name="city"
                autoComplete="city"
                value={city}
                onInput={ e=>setcity(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="state"
                label="Estado"
                name="state"
                autoComplete="state"
                value={state}
                onInput={ e=>setstate(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Cadastrar
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );

}