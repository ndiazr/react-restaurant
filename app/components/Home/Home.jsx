import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
// import style from '.'

const Home = () =>
  (
    <div>
      <Nav />
      <h1>Restaurante ReactJS</h1>
      <img src="../../../assets/img/food.jpg" />
      <h5>Este es el parrafo</h5>
      <Footer />
    </div>
  );

export default Home;
