import React from "react";

export default class NameSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState();
  }

  render() {
    const { handleClick } = this.props;
    return (
      <div className="nameSectionContainer">
        <button onClick={() => handleClick()}>Next</button>
      </div>
    );
  }
}
