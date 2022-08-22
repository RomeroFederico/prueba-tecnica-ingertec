import React from 'react';
import { Button } from 'react-bootstrap';
import { ArrowUp } from 'react-bootstrap-icons';

import s from './ScrollToTop.module.css';

export default function ScrollToTop() {

  const [isVisible, setIsVisible] = React.useState(true);
  
  React.useEffect(() => {   
    window.addEventListener("scroll", listenToScroll);
    return () => 
       window.removeEventListener("scroll", listenToScroll); 
  }, []);
  
  let listenToScroll = function() {
    if (needToScroll()) isVisible && setIsVisible(false);
    else setIsVisible(true);
  };

  function needToScroll(){
    return (document.body.scrollTop || document.documentElement.scrollTop) < 300;
  }

  let goToTheTop = function() {
    document.documentElement.scrollTop = 0;
  }

  return (
    <Button
      variant = "primary"
      className = {`${s.btnScrollToTop} ${isVisible ? s.show : s.hide}`}
      onClick = {goToTheTop}
    >
      <ArrowUp size = {30}/>
    </Button>
  );
}