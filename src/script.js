import React, { Component } from "react";
import "./style.css";

class TowersOfHanoi extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div data-stack="1">
          <div data-block="100" />
          <div data-block="75" />
          <div data-block="50" />
          <div data-block="25" />
        </div>
        <div data-stack="2" />
        <div data-stack="3" />
      </div>
    );
  }
}

export default TowersOfHanoi;
