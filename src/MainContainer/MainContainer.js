import React from "react";
import NameSection from "./NameSection";
import DecisionTree from "../DecisionTree/DecisionTree";

export default class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ showDecisionTree: true });
  }

  render() {
    const { showDecisionTree } = this.state;
    const { handleClick } = this.state;
    return (
      <div className="mainContainer">
        <h2>You want to ...</h2>
        {!showDecisionTree && <NameSection handleClick={this.handleClick} />}
        {showDecisionTree && <DecisionTree />}
      </div>
    );
  }
}
