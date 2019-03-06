import React from "react";
import FriendCard from "../FriendCard/index";

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 0
  };
  score = {
    count: 0
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

  //If state > score, update score
  bestScore = () => {
      if (this.state.count > this.score.count) {
          return this.setState({ count: (this.state.count = this.score.count) })
      }
  };

  // bestScore();

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          Click Counter!
        </div>
        <FriendCard
          count={this.state.count}
          handleIncrement={this.handleIncrement}
        />
      </div>
    );
};
};
  

export default Counter;

