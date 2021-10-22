import React from "react";
import BreakInterval from "./BreakInterval";
import SessionLenght from "./SessionLenght";
import Timer from "./Timer";
import { Jumbotron } from "reactstrap";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      breakLenght: 5,
      sessionLenght: 25,
      timerMinute: 25,
    };
    this.onIncreaseBreaklenght = this.onIncreaseBreaklenght.bind(this);
    this.onDecreaseBreaklenght = this.onDecreaseBreaklenght.bind(this);
    this.onIncreaseSessionlenght = this.onIncreaseSessionlenght.bind(this);
    this.onDecreaseSessionlenght = this.onDecreaseSessionlenght.bind(this);
    this.onToggleInterval = this.onToggleInterval.bind(this);
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  onIncreaseBreaklenght() {
    this.setState((prevState) => {
      return {
        breakLenght: prevState.breakLenght + 1,
      };
    });
  }

  onDecreaseBreaklenght() {
    this.setState((prevState) => {
      return {
        breakLenght: prevState.breakLenght - 1,
      };
    });
  }

  onIncreaseSessionlenght() {
    this.setState((prevState) => {
      return {
        sessionLenght: prevState.sessionLenght + 1,
        timerMinute: prevState.sessionLenght + 1,
      };
    });
  }

  onDecreaseSessionlenght() {
    this.setState((prevState) => {
      return {
        sessionLenght: prevState.sessionLenght - 1,
        timerMinute: prevState.sessionLenght - 1,
      };
    });
  }

  onUpdateTimerMinute() {
    this.setState((prevState) => {
      return {
        timerMinute: prevState.timerMinute - 1,
      };
    });
  }

  onToggleInterval(isSession) {
    if (isSession) {
      this.setState({
        timerMinute: this.state.sessionLenght,
      });
    } else {
      this.setState({
        timerMinute: this.state.breakLenght,
      });
    }
  }

  onReset() {
    this.setState ({
      timerMinute: this.state.sessionLenght
    })
  }

  render() {
    return (
      <main>
        <h2>=/ᐠ｡ꞈ｡ᐟ\=</h2>
        <Jumbotron>
          <Timer
            timerMinute={this.state.timerMinute}
            breakTimer={this.state.breakLenght}
            updateTimerMinute= {this.onUpdateTimerMinute}
            toggleInterval= {this.onToggleInterval}
            reset={this.onReset}
          />
        </Jumbotron>

        <section className="intervals-container">
          <BreakInterval
            breakInterval={this.state.breakLenght}
            increaseBreak={this.onIncreaseBreaklenght}
            decreaseBreak={this.onDecreaseBreaklenght}
          />
          <SessionLenght
            sessionLenght={this.state.sessionLenght}
            increaseSession={this.onIncreaseSessionlenght}
            decreaseSession={this.onDecreaseSessionlenght}
          />
        </section>
      </main>
    );
  }
}

export default App;
