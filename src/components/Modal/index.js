import React from "react";
import "./index.css";

class Modal extends React.Component {
    render() {
        if(!this.props.show){
            return null;
        }
      return <div>{this.props.children}</div>;
    }
  }

export default Modal;