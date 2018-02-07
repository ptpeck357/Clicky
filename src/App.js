import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
// import footer from "./components/Footer/footer.js"
import characters from "./Characters.json";
import  CharacterCard from "./components/Body/characters.js";

class App extends Component {

  state = {
    characters
  };

  // addFriend = id => {
  //   const characters = this.state.characters.filter(characters => characters.id !== id);
  //   // Set this.state.characters equal to the new friends array
  //   this.setState({ characters});
  // };

  render() {
    return (
      <div>
      <Navbar />
      <Jumbotron />
        {this.state.characters.map(characters => (
          <div className="container">
          <CharacterCard
            id={characters.id}
            name={characters.name}
            image={characters.image}
          />
          </div>
        ))}
      <footer />
      </div>
    );
  }
}

export default App;
