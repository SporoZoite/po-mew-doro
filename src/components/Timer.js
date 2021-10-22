import React from "react";
import { Button } from "reactstrap";

class Timer extends React.Component {
  constructor() {
    super();

    this.state = {
      isSession: true,
      timerSecond: 0,
      intervalId: 0,
    };

    this.playTimer = this.playTimer.bind(this);
    this.decreaseTimer = this.decreaseTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.reset = this.reset.bind(this);
  }

  playTimer() {
    let intervalId = setInterval(this.decreaseTimer, 1000);

    this.setState({
      intervalId: intervalId,
    });
  }

  decreaseTimer() {
    switch (this.state.timerSecond) {
      case 0:
        if (this.props.timerMinute === 0) {
          if (this.state.isSession) {
            this.setState({
              isSession: false,
            });
            this.props.toggleInterval(this.state.isSession);
          } else {
            this.setState({
              isSession: true,
            });
            this.props.toggleInterval(this.state.isSession);
          }
        } else {
          this.props.updateTimerMinute();
          this.setState({
            timerSecond: 59,
          });
        }
        break;
      default:
        this.setState((prevState) => {
          return {
            timerSecond: prevState.timerSecond - 1,
          };
        });
        break;
    }
  }

  stopTimer() {
    clearInterval(this.state.intervalId);
  }

  reset() {
    this.stopTimer();
    this.props.reset();
    this.setState({
      timerSecond: 0,
      isSession: true
    });
  }

  render() {
    return (
      <section className="timer-container">
        <section className="timer">
          <h3>{this.state.isSession === true ? "MEW" : "PURR"}</h3>
          <section className="time-container">
            <span>{this.props.timerMinute}</span>
            <span>:</span>
            <span>
              {this.state.timerSecond === 0
                ? "00"
                : this.state.timerSecond < 10
                ? "0" + this.state.timerSecond
                : this.state.timerSecond}
            </span>
          </section>
        </section>
        <section className="actions">
          <Button
            className="action-btn"
            color="primary"
            onClick={this.playTimer}
          >
            ▶
          </Button>
          <Button
            className="action-btn"
            color="primary"
            onClick={this.stopTimer}
          >
            ◽
          </Button>
          <Button className="action-btn" color="primary" onClick={this.reset}>
            ⤴
          </Button>
        </section>
      </section>
    );
  }
}

export default Timer;
