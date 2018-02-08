import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer.js"
import characters from "./Characters.json";
import CharacterCard from "./components/Body/characters.js";
import Wrapper from "./components/Wrapper/index.js"
import "./app.css"

class App extends Component {

  state = {
    score: 0,
    topscore: 0,
    clicks: [],
    quote: "",
    characters
  };

  componentDidMount = () => {
    this.quote("Looney Tunes")
  }

  quote = quote => {
    this.setState({quote: quote})
  }

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
    if(this.state.clicks.includes(id)){
      this.setState({ score: 0, clicks: []});

    } else {
        if (this.state.score + 1 > this.state.topscore) {
          this.setState({
              topscore: this.state.score + 1
          })
        }
      this.state.clicks.push(id)
      this.setState({ score: this.state.score + 1});
    }
  };

  handleOnchange = (id, phrase) => {
    this.checkClick(id)
    this.shuffleArray(this.state.characters)
    this.setState({quote: phrase})
  };


  render() {
    return (
      <div>
        <Navbar quote = {this.state.quote} score = {this.state.score} topscore={this.state.topscore}/>
          <Wrapper>
            {this.state.characters.map(characters => (
                <CharacterCard
                  handleOnchange={this.handleOnchange}
                  id={characters.id}
                  name={characters.name}
                  image={characters.image}
                  phrase={characters.catchphrase}
                />
            ))}
          </Wrapper>
        <Footer />
    </div>
    );
  }
}

export default App;
