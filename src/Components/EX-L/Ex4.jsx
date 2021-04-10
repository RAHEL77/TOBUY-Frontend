import React, { Component } from "react";
import Ex1 from "./Ex1";

class Ex4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cnt: 0,
      arr:[1,2,3,4,5]
    };
  }

  inc = () => {
    this.setState(() => {
      const newcnt = this.state.cnt + 1;
      console.log('new value', newcnt);
      return { cnt: newcnt };
    });
    console.log('old value', this.state.cnt);
  };

  render() {
    return (
      <div>
        <button onClick={this.inc}>
          {this.props.btnname ? this.props.btnname : "submit"}
        </button>
        <div> {this.state.cnt}</div>
        <div>{this.state.arr.map(item=> <span key={item}> {item},\/, </span>)}   </div>
      </div>
    );
  }
}
export default Ex4;
