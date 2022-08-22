import React from 'react';
import Card from 'react-bootstrap/Card';
import { EyeFill, Quote } from 'react-bootstrap-icons';
import ImageModal from '../ImageModal/ImageModal';
import ImageLoader from '../ImageLoader/ImageLoader';

import s from './CardImage.module.css';

export default function CardImage({ imageSrc, title, description, isPopup = false, isModal = false }) {

  const [ showImage, setShowImage ] = React.useState(false);
  const [ views, setViews ] = React.useState(0);
  const [ popup, setPopup ] = React.useState(null);

  let handleChooseOption = function() {
    if (isPopup) handleShowPopup();
    else handleShowModal();
  }

  let handleShowPopup = function() {
    if (popup && !popup.closed) popup.focus();
    else openPopup();
  }

  let openPopup = function() {
    let newPopup = window.open('/popup', title,'height=400,width=800');
    newPopup.cardData = { imageSrc, title };
    newPopup.onload = function() { 
      this.document.title = title;
    }

    newPopup.addEventListener("message", (response) => {
      if (response.origin !== window.location.origin || !response.data.showImagePopup) return;

      if (response.data.view) handleView();
      if (response.data.close) { 
        newPopup.close();
        setPopup(null);
      }
    }, false);

    setPopup(newPopup);
  }

  let handleShowModal = function() {
    handleView();
    handleShowImage();
  }

  let handleShowImage = function() {
    setShowImage(!showImage);
  }

  let handleView = function() {
    setViews(views => views + 1);
  }

  return (
    <>
    <Card className = {s.card}>
      <ImageLoader src = {imageSrc} alt = {title} handleOnClick = {handleChooseOption}/>
      <Card.Body className = {`small text-center fst-italic d-flex align-items-center justify-content-between flex-column`}>
        <Quote size = {20} className = {"align-self-start"}/>
        <Card.Text className = {s.description}>{description}</Card.Text>
        <Quote className = {`${s.rightQuote} align-self-end`} size = {20}/>
      </Card.Body>
      <Card.Footer className = {`small ${s.footer}`}>
        <small className = {"fw-bold"}>{views}</small>
        <EyeFill size = {20} />
      </Card.Footer>
    </Card>
    {
      isModal && showImage && 
        <ImageModal
          imageSrc = {imageSrc}
          imageAlt = {title}
          handleShow = {handleShowImage}
        />
    }
    </>
  );
}