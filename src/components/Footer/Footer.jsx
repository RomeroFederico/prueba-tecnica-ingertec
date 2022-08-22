import React from 'react';

import s from './Footer.module.css';

export default function Footer() {
  return (
    <div className = {s.footerContainer}>
      <div className = {s.links}></div>
      <span className = {"fw-bold text-light"}>© 2022 Copyright: Romero Federico</span>
    </div>
  );
}