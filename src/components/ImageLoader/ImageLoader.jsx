import React from 'react';
import Card from 'react-bootstrap/Card';

import s from './ImageLoader.module.css';

export default function ImageLoader({ src, alt }) {

  const [ errorLoading, setErrorLoading ] = React.useState(false);
  const [ showImage, setShowImage ] = React.useState(false);
  const [ delay, setDelay ] = React.useState(true);

  React.useEffect(() => {
    let idTimeOut = setTimeout(() => setDelay(false), Math.random() * 500 + 500);
    return (() => {
      clearTimeout(idTimeOut);
    })
  }, []);

  let handleErrorImageNotFound = function() {
    setErrorLoading(true);
  }

  let handleLoadImage = function() {
    setShowImage(true);
  }

  return (
    <div className = {s.wrapper}>
    {
      ((!showImage && !errorLoading) || delay) && 
      <div className = {s.loadingContainer}>
        <div className = "spinner-border" role = "status">
          <span className = "visually-hidden">Loading...</span>
        </div>
      </div>
    }
    {
      !errorLoading &&
      <Card.Img
        variant = 'top'
        src = {src} 
        alt = {alt}
        onError = {handleErrorImageNotFound}
        onLoad = {handleLoadImage} 
        className = {`${s.img} ${ !showImage || delay ? s.dontShowImage : '' }`}
      />
    }
    </div> 
  );
}