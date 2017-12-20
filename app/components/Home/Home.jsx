import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
// import style from '.'

const Home = () =>
  (
    <div>
      <Nav />
      <h1>Restaurante ReactJS</h1>
      <img href="https://www.google.com.co/url?sa=i&rct=j&q=&esrc=s&source=imgres&cd=&cad=rja&uact=8&ved=0ahUKEwi3uf2roZnYAhWI6CYKHbY4CdQQjRwIBw&url=https%3A%2F%2Fwww.pedidosya.cl%2Fcomidas%2Fcomida-rapida&psig=AOvVaw1KWioKc_b_aC0L-De8pON5&ust=1513882341104179" />
      <h3>Este es el parrafo</h3>
      <Footer />
    </div>
  );

export default Home;
