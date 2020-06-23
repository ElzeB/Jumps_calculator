import React from "react";
import "./index.css";
import Button from "../Button";

const CODE_LENGTH = new Array(9).fill(0);

class  Home extends React.Component {
    
    state = {
        value: "",
        focused: false,
      };

    input = React.createRef();

    handleClick = () => {
        this.input.current.focus();
      };
      handleFocus = () => {
        this.setState({ focused: true });
      };
      handleBlur = () => {
        this.setState({
          focused: false,
        });
      };

      handleChange = e => {
        const value = e.target.value;
      
        this.setState(state => {
          if (state.value.length >= CODE_LENGTH.length) return null;
          return {
            value: (state.value + value),
          };
        });
      };

      render() {
    
        const { value, focused } = this.state;
        const values = [];
        value.split("").forEach(function(e){values.push(parseInt(e))});
        const selectedIndex = values.length < CODE_LENGTH.length ? values.length : CODE_LENGTH.length - 1;
        console.log(values);

        let jump = function(values) {
            let n = values.length;
            if(n<2) {
              return 0;
            }
            
            let maxPosCanReach = values[0];
            let curStep=1;
            let maxPosCanReachWithCurSteps=values[0];
            for(let i=1; i<n; i++) {
              if(maxPosCanReachWithCurSteps<i) {
                curStep++;
                maxPosCanReachWithCurSteps = maxPosCanReach;
              }
              
              maxPosCanReach = Math.max(maxPosCanReach, i+values[i]);
            }
            console.log(curStep);
            
          }  
        
          jump(values);

        return (
          <div className="App">
            <div className="wrap" onClick={this.handleClick}>
              {CODE_LENGTH.map((v, index) => {
                return <div className="display">{values[index]}</div>;
              })}
              <input
                value=""
                ref={this.input}
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                className="input"
                style={{
                  width: "32px",
                  top: "0px",
                  bottom: "0px",
                  left: `${selectedIndex * 32}px`,
                  alignContenta
                  a
                  alignContentaa
                  alignContentaa
                  a
                }}
              />
              
            </div>
          </div>
        );
      }
}

export default Home;
