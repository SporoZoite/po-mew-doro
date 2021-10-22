import React from "react";
import { Button } from "reactstrap";

function BreakInterval(props) {
  function decreaseCounter() {
    if (props.breakInterval === 1) {
      return;
    }
      props.decreaseBreak();
  }

  function increaseCounter() {
    if (props.breakInterval === 60) {
      return;
    }
    props.increaseBreak();
  }
  return (
    <section className="interval-box">
      <h4>BREAK LENGHT</h4>
      <section className="interval-container">
        <Button color="primary" onClick={increaseCounter}>
          ⬆
        </Button>
        <p className="interval">{props.breakInterval}</p>
        <Button color="primary" onClick={decreaseCounter}>
          ⬇
        </Button>
      </section>
    </section>
  );
}

export default BreakInterval;
