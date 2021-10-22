import React from "react";
import { Button } from "reactstrap";

function SessionLenght(props) {
  function increaseSession() {
    if (props.sessionLenght === 60) {
      return;
    }
    props.increaseSession();
  }
   function decreaseSession() {
     if (props.sessionLenght === 1) {
       return;
     }
     props.decreaseSession();
   }
   
  return (
    <section className="interval-box">
      <h4>SESSION LENGHT</h4>
      <section className="interval-container">
        <Button color="primary" onClick={increaseSession}>
          ⬆
        </Button>
        <p className="interval">{props.sessionLenght}</p>
        <Button color="primary" onClick={decreaseSession}>
          ⬇{" "}
        </Button>
      </section>
    </section>
  );
}

export default SessionLenght;
