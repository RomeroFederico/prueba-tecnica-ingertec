import React from 'react';
import { Github } from 'react-bootstrap-icons';

import s from './Footer.module.css';

export default function Footer() {

  let handleClick = function() {
    window.open("https://github.com/RomeroFederico/prueba-tecnica-ingertec", "_blank");
  }

  return (
    <div className = {s.footerContainer}>
      <div className = {s.links}>
        <Github size = {30} color = {"white"} onClick = {handleClick}/>
        <a
          className = {"fw-bold text-light"}
          href = {"https://github.com/RomeroFederico/prueba-tecnica-ingertec"}
          target = "_blank" 
          rel = "noreferrer"
        >
          Repositorio
        </a>
      </div>
      <span className = {"fw-bold text-light"}>© 2022 Copyright: Romero Federico</span>
    </div>
  );
}