import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import s from './ImagePopup.module.css';

export default function ImagePopup() {

  const navigate = useNavigate();

  const [ isPopup, setIsPopup ] = React.useState(false);
  const [ imageData, setImageData ] = React.useState(null);

  React.useEffect(() => {
    if(!window.opener) navigate('/');
    else {
      setIsPopup(true);
      setImageData({ ...window.cardData });
      window.opener.addEventListener('unload', (event) => {
        window.close();
      });
    }
  }, []);

  let handleLike = function(e) {
    e.preventDefault() 
    if (window && window.parent) window.parent.postMessage({ showImagePopup: true, view: true });
  }

  let handleClose = function(e) {
    e.preventDefault();
    if (window && window.parent) window.parent.postMessage({ showImagePopup: true, close: true });
  }

  if (!isPopup) return <></>;

  return (
    <div className = {s.container} style = {{backgroundImage: `url(${imageData.imageSrc})`}}>
      <Button
        className = {`position-absolute bottom-0 start-0`}
        onClick = {handleLike}
        variant = "success"
        size = "sm"
      >
        Ok
      </Button>
      <Button
        className = {`position-absolute bottom-0 end-0`}
        onClick = {handleClose}
        variant = "danger"
        size = "sm"
      >
        Cerrar
      </Button>
    </div>
  );
}