import React from 'react';
import Cards from '../Cards/Cards';

import s from './Home.module.css';

export default function Home() {
  return (
    <div className = {s.container}>
      <h1 className = {`${s.title} text-center`}>Prueba Tecnica Ingertec</h1>
      <Cards />
    </div>
  );
}