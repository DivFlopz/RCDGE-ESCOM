import React from 'react';

import { Link, Route, Routes } from 'react-router-dom';
import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import Button from '../UI/Button/Button';
import Procedure from '../Procedure/Procedure'
import PastProcedures from '../PastProcedures/PastProcedures';

const Home = () => {
  let name = "Divier";


  return (

    <Card className={classes.home}>
      <h1>Bienvenido, {name}</h1>
      <Routes>
        <Route path='Procedure' element={<Procedure />}></Route>
        <Route path='PastProcedures' element={<PastProcedures />}></Route>
      </Routes>
      <Link to="Procedure"><Button >Empezar nuevo tramite</Button></Link>
      <Link to="PastProcedures"><Button>Consultar Tramites</Button></Link>
    </Card>
  );
};

export default Home;
