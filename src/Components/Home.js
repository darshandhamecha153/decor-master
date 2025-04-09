import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import "../css/Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <main className='home'>
        <h2>Welcome to HomeDecor</h2>
        <p>Find the best home decor items for your space!</p>
      </main>
      <Footer />
    </>
  );
};

export default Home;