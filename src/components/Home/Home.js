import React from 'react';

import { useNavigate } from 'react-router-dom';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import Button from '../UI/Button/Button';
import Procedure from '../Procedure/Procedure'
import PastProcedures from '../PastProcedures/PastProcedures';

const Home = () => {
  var name = "Divier";
  const Navigate = useNavigate();

  return (
    <Card className={classes.home}>
      <h1>Bienvenido, {name}</h1>
        <Button onclick={() => Navigate(<Procedure />)}>Empezar nuevo tramite</Button>
        <Button onclick={() => Navigate(<PastProcedures />)}>Consultar Tramites </Button>
    </Card>
  );
};

export default Home;
