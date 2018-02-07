import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
// import footer from "./components/Footer/footer.js"
import characters from "./Characters.json";
import  CharacterCard from "./components/Body/characters.js";
import "./app.css"

class App extends Component {

  state = {
    score: 0,
    topscore: 0,
    characters
  };

  handleIncrement = () => {
    this.setState({ score: this.state.score + 1, topscore: this.state.topscore + 1 });
  };

  render() {
    return (
      <div>
        <Navbar score = {this.state.score} topscore={this.state.topscore}/>
        <Jumbotron />
          {this.state.characters.map(characters => (
            <div className="container">
             <button id={characters.id} onClick={this.handleIncrement}>
              <CharacterCard
                id={characters.id}
                name={characters.name}
                image={characters.image}
               />
               </button>
            </div>
          ))}
        <footer />
      </div>
    );
  }
}

export default App;
