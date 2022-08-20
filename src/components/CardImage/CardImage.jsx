import React from 'react';
import Card from 'react-bootstrap/Card';
import { EyeFill } from 'react-bootstrap-icons';
import s from './CardImage.module.css';

export default function CardImage({ imageSrc, title, description }) {
  return (
    <Card className = {s.card}>
      <Card.Img variant = 'top' src = {imageSrc} alt = {title} className = {s.img}/>
      <Card.Body className = {`small text-center fst-italic`}>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer className = {`small ${s.footer}`}>
        <small className = {"fw-bold"}>0</small>
        <EyeFill size = {20} />
      </Card.Footer>
    </Card>
  );
}