import "./App.css";
import Yorum from "./components/Header/Header";
import List from "./components/ListComp/List";
import { Component } from "react";
import Form from "./components/Form/Form";

class App extends Component {
  state = {
    comments: [],
    commentValue: "",
    vote: 0,
    id: 0,
    input: "",
  };
  handleComment = () => {
   this.setState ({comments: [...this.state.comments, {
    id: Math.random(),
    text: this.state.input,
    vote: this.state.vote,
    
  }]})
  };

  setInput = (value) => {
    this.setState({ input: value });
  };

  resetState = () => {
    this.setState({ input: ""})
  }

  ratingChanged = (newRating) => {
    if (newRating > 0) {
      this.setState({ vote: newRating });
    }
  };

  yorum = () => {
    let x = document.getElementById("yorum").value;

    if (x.length > 3) {
      this.setState({ commentValue: x });
    }
  };

  render() {
    console.log(this.state.vote);
    const { vote, input, comments } = this.setState;
    return (
      <div className="App">
        <Yorum />
        <List
          handleComment={this.handleComment}
          comments={this.state.comments}
          ratingChanged={this.ratingChanged}
          yorum={this.yorum}
        />
        <Form
          inputValue={this.state.input}
          change={this.setInput}
          ratingChanged={this.ratingChanged}
          vote={this.state.vote}
          comments={this.state.comments}
          handleComment={this.handleComment}
          resetState = {this.resetState}
        />
      </div>
    );
  }
}

export default App;
