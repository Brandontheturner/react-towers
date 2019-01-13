import React, { Component } from "react";
import "./style.css";

class TowersOfHanoi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: [4, 3, 2, 1],
      b: [],
      c: [],
      gameWon: false
    };
  }
  onDragOver = event => {
    event.preventDefault();
  };

  onDragStart = (event, disc, startStack) => {
    console.log("dragStart", disc, startStack);
    event.dataTransfer.setData("disc", disc);
    event.dataTransfer.setData("startStack", startStack);
  };

  onDrop = (event, endStack) => {
    const disc = event.dataTransfer.getData("disc");
    const startStack = event.dataTransfer.getData("startStack");
  };
  render() {
    return (
      <div>
        <div
          data-stack="a"
          onDragOver={this.onDragOver}
          onDrop={e => this.onDrop(e, "a")}
        >
          {this.state.a.map(num => {
            return (
              <div
                onDragStart={e => this.onDragStart(e, num, "a")}
                draggable
                key={num}
                data-block={num * 25}
              />
            );
          })}
        </div>
        <div
          data-stack="b"
          onDragOver={this.onDragOver}
          onDrop={e => this.onDrop(e, "b")}
        >
          {this.state.b.map(num => {
            return (
              <div
                onDragStart={e => this.onDragStart(e, num, "b")}
                draggable
                key={num}
                data-block={num * 25}
              />
            );
          })}
        </div>
        <div
          data-stack="c"
          onDragOver={this.onDragOver}
          onDrop={e => this.onDrop(e, "c")}
        >
          {this.state.c.map(num => {
            return (
              <div
                onDragStart={e => this.onDragStart(e, num, "c")}
                draggable
                key={num}
                data-block={num * 25}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default TowersOfHanoi;
