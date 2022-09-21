import React, { Component } from "react";
import { Wizard, Step, Controls } from "react-decision-tree-flow";

const tree = {
  step1: ["step2", "sideshow"],
  sideshow: ["step2", "step3"],
  step2: ["step3", "error"],
  step3: ["step1"],
  error: ["step2"],
};

const data = {
  content: {
    body: [
      {
        tag: "question1",
        question: "Do you want ...?",
        nextTag: ["question2"],
        nextTagDesc: ["yes"],
      },
      {
        tag: "question2",
        question: "Do you want 2 ...?",
        nextTag: ["question2", "question3"],
        nextTagDesc: ["yes", "no"],
      },
      {
        tag: "question3",
        question: "Do you want 3 ...?",
        nextTag: ["question2", "question3"],
        nextTagDesc: ["yes", "no"],
      },
    ],
  },
};

class DecisionTree extends Component {
  render() {
    return (
      <div>
        <Wizard first="step1" tree={tree}>
          {Object.keys(tree).map((key) => (
            <Step name={key} key={key}>
              <Controls>
                {({ tree, step, destinations }) => {
                  return (
                    <div>
                      I am {step}
                      <br />
                      {Object.entries(destinations).map(([key, value]) => (
                        <button key={key} onClick={value}>
                          GO TO {key}
                        </button>
                      ))}
                    </div>
                  );
                }}
              </Controls>
            </Step>
          ))}
        </Wizard>
      </div>
    );
  }
}

/*
class DecisionTree extends Component {
  render() {
    return (
      <div className="decisionTreeContainer">
        <Wizard tree={tree} first="question1">
          <Step name="question1">
            <div className="stepContent">
              <h4>Are you visiting Berlin alone?</h4>
              <Controls>
                {({ destinations: { question2, question3 } }) => (
                  <div className="buttonContainer">
                    <button onClick={question2}>Yes</button>
                    <button onClick={question3}>No</button>
                  </div>
                )}
              </Controls>
            </div>
          </Step>
          <Step name="question2">
            <div className="stepContent">
              <h4>How old are you?</h4>
              <Controls>
                {({ destinations: { question3, question1 }, back }) => (
                  <div className="buttonContainer">
                    <button onClick={question3}>up to 24 years old</button>
                    <button onClick={question1}>older than 24</button>
                    <button className="backButton" onClick={back}>
                      Back
                    </button>
                  </div>
                )}
              </Controls>
            </div>
          </Step>
          <Step name="question3">
            <div className="stepContent">
              <h4>Wurster?</h4>
              <Controls>
                {({ destinations: { question2, question1 }, back }) => (
                  <div className="buttonContainer">
                    <button onClick={question2}>up to 24 years old</button>
                    <button onClick={question1}>older than 24</button>
                    <button className="backButton" onClick={back}>
                      Back
                    </button>
                  </div>
                )}
              </Controls>
            </div>
          </Step>
          <Step name="conclusion">
            <Conclusion />
          </Step>
        </Wizard>
      </div>
    );
  }
}*/
export default DecisionTree;
