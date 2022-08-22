import React from 'react';
import Cards from '../Cards/Cards';
import TextAreaLoad from '../TextAreaLoad/TextAreaLoad';
import NavbarHome from '../NavbarHome/NavbarHome';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

import s from './Home.module.css';

export default function Home() {
  return (
    <div className = {s.container}>
      <NavbarHome />
      <h1 className = {`${s.title} text-center`}>- Prueba Tecnica Ingertec -</h1>
      <Cards />
      <TextAreaLoad />
      <Footer />
      <ScrollToTop />
    </div>
  );
}