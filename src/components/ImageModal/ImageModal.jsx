import React from 'react';
import { Image } from 'react-bootstrap';

import s from './ImageModal.module.css';

export default function ImageModal({ imageSrc, imageAlt, handleShow }) {

  const [ closing, setClosing ] = React.useState(false);

  let handleClose = function(e) {
    e.preventDefault();
    if (closing) return;
    if (e.target === e.currentTarget) {
      setClosing(true);
      setTimeout(() => handleShow(), 450);
    }
  }

  return (
    <div className = {`${s.container} position-fixed`} onClick = {handleClose}>
      <Image 
        src = {imageSrc}
        alt = {imageAlt}
        fluid = {true}
        className = {`${s.image} border border-light border-5 ${closing ? s.close : s.show}`}/>
    </div>
  );
}