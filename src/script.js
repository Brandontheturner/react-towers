import React, { Component } from "react";
import "./style.css";
import $ from "jquery";
class TowersOfHanoi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: [4, 3, 2, 1],
      b: [],
      c: [],
      gameWon: false,
      pickUpBlock: 0
    };
  }

  winConditions = () => {
    let win = false;
    if (this.state.c.length === 4) {
      win = true;
    }
    return win;
  };

  moveBlock = clickStack => {
    if (this.state.gameWon === false) {
      if (this.state.pickUpBlock !== 0) {
        this.addBlock(clickStack);
      } else {
        this.deleteBlock(clickStack);
      }
    }
  };
  //define variable for block movement
  // need to have a function that picks up the block
  // then need to have a function that stores the block
  // then need to have a function that places the block, but checks to make sure the block is not smaller than the block already there
  //reset value back to zero
  //holdBlock() => { }
  //placeBlock() => { }
  addBlock = stack => {
    console.log("stack: " + stack);
    console.log("run addBlock");
    console.log("pickedBlock: " + this.state.pickUpBlock);

    let currentStack = null;
    if (stack === "a") {
      currentStack = this.state.a;
    }
    if (stack === "b") {
      currentStack = this.state.b;
    }
    if (stack === "c") {
      currentStack = this.state.c;
    }
    let lastBlock = parseInt(
      currentStack.slice(currentStack.length - 1).join("")
    );
    console.log(lastBlock);
    if (currentStack.length === 0) {
      this.setState({
        currentStack: currentStack.push(this.state.pickUpBlock)
      });
    } else if (
      currentStack.length !== 0 &&
      lastBlock > this.state.pickUpBlock
    ) {
      this.setState({
        currentStack: currentStack.push(this.state.pickUpBlock)
      });
      if (this.winConditions()) {
        this.setState({ gameWon: true });
        $("#announce-game-won").text("Winner!");
      }
    } else {
      return false;
    }

    this.setState({ pickUpBlock: 0 });
  };
  deleteBlock = stack => {
    console.log("stack: " + stack);
    console.log("run deleteBlock");
    console.log("pickedBlock: " + this.state.pickUpBlock);

    let currentStack = null;
    if (stack === "a") {
      currentStack = this.state.a;
    }
    if (stack === "b") {
      currentStack = this.state.b;
    }
    if (stack === "c") {
      currentStack = this.state.c;
    }
    let lastBlock = parseInt(
      currentStack.slice(currentStack.length - 1).join("")
    );

    if (currentStack.length === 0) {
      //cannot delete from empty stack
      return false;
    }
    this.setState({ pickUpBlock: lastBlock });
    let newStack = currentStack.filter(num => {
      return num !== lastBlock;
    });
    if (stack === "a") {
      this.setState({ a: newStack });
    }
    if (stack === "b") {
      this.setState({ b: newStack });
    }
    if (stack === "c") {
      this.setState({ c: newStack });
    }
  };

  render() {
    return (
      <div>
        <div
          data-stack="a"
          onClick={() => {
            this.moveBlock("a");
          }}
        >
          {this.state.a.map(num => {
            return <div key={num * 25} data-block={num * 25} />;
          })}
        </div>
        <div
          data-stack="b"
          onClick={() => {
            this.moveBlock("b");
          }}
        >
          {this.state.b.map(num => {
            return <div key={num * 25} data-block={num * 25} />;
          })}
        </div>
        <div
          data-stack="c"
          onClick={() => {
            this.moveBlock("c");
          }}
        >
          {this.state.c.map(num => {
            return <div key={num * 25} data-block={num * 25} />;
          })}
        </div>
        <div id="announce-game-won" />
      </div>
    );
  }
}

export default TowersOfHanoi;
