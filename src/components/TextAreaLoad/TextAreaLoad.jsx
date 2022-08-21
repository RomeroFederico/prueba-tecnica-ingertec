import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { ExclamationTriangleFill } from 'react-bootstrap-icons';

import s from './TextAreaLoad.module.css';
import { Collapse, FormLabel } from 'react-bootstrap';

export default function TextAreaLoad() {

  const [ text, setText ] = React.useState("");
  const [ error, setError ] = React.useState(false);
  const [ loading, setLoading ] = React.useState(false);

  let handleInput = function(e) {
    let { value } = e.target;
    setText(value);
  }

  let handleFetch = function() {
    setError(false);
    setLoading(true);
    setTimeout(() => fetchJson(), 1000);
  }

  let fetchJson = function() {
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
      if (httpRequest.readyState === 4) {
        setLoading(false);
        if (httpRequest.status === 200) {
          var data = JSON.parse(httpRequest.responseText);
          setText(data.texto);
        }
        else setError(true);
      }
    };
    httpRequest.open('GET', "http://localhost:3001/public/json/home.json");
    httpRequest.send();
  }

  return (
    <div className = {s.container}>
      <Form className = {s.form}>
        <Form.Group>
          <Form.Control 
            as = "textarea"
            rows = "3"
            onChange = {handleInput}
            className = {s.textarea}
            value = {text}
            disabled = {loading}
          />
        </Form.Group>
        {
          error &&
            <div className = {`alert alert-danger ${s.alert}`} role="alert">
              <ExclamationTriangleFill size = {20}/> Error Cargando el Texto.
            </div>
        }
        <Button
            className = {"text-center"}
            onClick = {handleFetch}
            variant = "primary"
            disabled = {loading}
          >
          {
            loading && 
            <>
              <span className = "spinner-border spinner-border-sm" role = "status" aria-hidden = "true"></span>
              {" Cargando Texto..."}
            </>
          }
          { !loading && "Cargar Texto"} 
        </Button>
      </Form>
    </div>
  );
}