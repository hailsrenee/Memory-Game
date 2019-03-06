import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import ScoreCard from "./components/ScoreCard";
import Counter from "./components/Counter";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  //FIGURE OUT HOW TO SHUFFLE AN ARRAY IF IMAGES
  
  shuffleFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.shuffle(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  //Add click handler: if card has not been clicked already then add +1 to total score
  //AND shuffle deck
  //else if card has been clicked already then set total score = 0
  //AND restart game

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        <ScoreCard>Score Card</ScoreCard>
        <Counter>Counter</Counter>
        {this.state.friends.map(friend => (
          <FriendCard
            shuffleFriend={this.shuffleFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;


