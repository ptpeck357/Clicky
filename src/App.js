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
    clicks: [],
    characters
  };

  shuffleArray = array => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }

  checkClick = id => {
    console.log(id);
    if(this.state.clicks.includes(id)){
      console.log("you loose")
      this.setState({ score: 0, clicks: []});
    } else {
      this.state.clicks.push(id)
      this.setState({ score: this.state.score + 1});
      console.log("you win")
    }
  };

  handleOnchange = id => {
    this.checkClick(id.target.id)
    this.shuffleArray(this.state.characters)
  };


  render() {
    return (
      <div>
        <Navbar score = {this.state.score} topscore={this.state.topscore}/>
        <Jumbotron/>
        <div className="container">
          {this.state.characters.map(characters => (
             <button id={characters.id} onClick={this.handleOnchange}>
              <CharacterCard
                id={characters.id}
                name={characters.name}
                image={characters.image}
               />
               </button>
          ))}
           </div>
        <footer />
      </div>
    );
  }
}

export default App;
