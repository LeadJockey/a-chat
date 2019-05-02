import React from "react";
import { observer, inject } from "mobx-react";

@inject(({ counter }) => ({
  count: counter.count,
  increase: counter.increase,
  decrease: counter.decrease
}))
@observer
class Counter extends React.Component {
  render() {
    const { count, increase, decrease } = this.props;
    return (
      <div className="comp_counter">
        <button
          className="btn_count"
          onClick={() => {
            decrease();
          }}
        >
          {" "}
          -{" "}
        </button>
        <span className="txt_count">{count}</span>
        <button
          className="btn_count"
          onClick={() => {
            increase();
          }}
        >
          {" "}
          +{" "}
        </button>
      </div>
    );
  }
}

export default Counter;
