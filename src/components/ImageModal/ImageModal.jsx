import React from 'react';
import { Image } from 'react-bootstrap';

import s from './ImageModal.module.css';

export default function ImageModal({ imageSrc, imageAlt, handleShow }) {

  let handleClose = function(e) {
    e.preventDefault();
    if (e.target === e.currentTarget) handleShow();
  }

  return (
    <div className = {`${s.container} position-fixed`} onClick = {handleClose}>
      <Image src = {imageSrc} alt = {imageAlt} fluid = {true} className = {`${s.image} border border-light border-5`}/>
    </div>
  );
}