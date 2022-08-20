import React from 'react';
import CardImage from '../CardImage/CardImage';
import { images } from '../../util/data';
import s from './Cards.module.css';

export default function Cards() {

  return (
    <div className = {s.container}>
    {
      images && images.length > 0 && images.map((image, index) => 

        <CardImage 
          imageSrc = {image.src}
          title = {image.title}
          description = {image.description}
          isPopup = {index % 2 === 0}
          isModal = {index % 2 === 1}
          key = {`image-card-${image.title}-${index}`}
        />
      )
    }
    </div>
  );
}