import React, { Component } from "react";
import "./index.css";
import Button from "../Button";
import Modal from "../Modal";

const CODE_LENGTH = new Array(9).fill(0);

class Home extends Component {
  state = {
    value: "",
    focused: false,
    show: false,
  };

  input = React.createRef();

  handleClick = () => {
    this.input.current.focus();
  };
  handleFocus = () => {
    this.setState({ focused: true });
  };

  // Handel Typing
  // ------------------------------------------------

  handleChange = (e) => {
    const value = e.target.value;

    this.setState((state) => {
      if (state.value.length >= CODE_LENGTH.length) return null;
      return {
        value: state.value + value,
      };
    });
  };

  // Modal window
  // ------------------------------------------------

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  // Handel Delete
  // ------------------------------------------------

  handleKeyUp = (e) => {
    if (e.key === "Backspace") {
      this.setState((state) => {
        return {
          value: state.value.slice(0, state.value.length - 1),
        };
      });
    }
  };


  render() {
    const { value, focused } = this.state;
    const values = [];
    value.split("").forEach(function (e) {
      values.push(parseInt(e));
    });
    const selectedIndex =
      values.length < CODE_LENGTH.length
        ? values.length
        : CODE_LENGTH.length - 1;
    // console.log(values);

    let jump = function (values) {
      let n = values.length;
      if (n < 2) {
        return 0;
      }

      let maxPosCanReach = values[0];
      let curStep = 1;
      let maxPosCanReachWithCurSteps = values[0];
      for (let i = 1; i < n; i++) {
        if (maxPosCanReachWithCurSteps < i) {
          curStep++;
          maxPosCanReachWithCurSteps = maxPosCanReach;
        }
        maxPosCanReach = Math.max(maxPosCanReach, i + values[i]);
        continue;
      }

      return(curStep);
    };

    jump(values);

    return (
      <React.Fragment>
        <div className="App">
          <div className="wrap" onClick={this.handleClick}>
            {CODE_LENGTH.map((v, index) => {
              return <div className="display">{values[index]}</div>;
            })}
            <input
              value=""
              ref={this.input}
              onChange={this.handleChange}
              onKeyUp={this.handleKeyUp}
              onFocus={this.handleFocus}
              className="input"
              style={{
                width: "32px",
                top: "0px",
                bottom: "0px",
                left: `${selectedIndex * 32}px`,
              }}
            />
          </div>
          <Button
            onClick={
              this.showModal
            }
            title="Check"
          />
        </div>

        {/* Effort to show result in Modal container. Needs investigations.
        ------------------------------------------------ */}

        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>{this.curStep}</p>
          <p>Data</p>
        </Modal>
        {/* <Button onClick={this.showModal}></Button> */}

        {/* ------------------------------------------------- */}
      </React.Fragment>
    );
  }
}

export default Home;
