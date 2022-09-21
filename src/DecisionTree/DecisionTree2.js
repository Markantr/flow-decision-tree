import React, { Component } from "react";
import { Wizard, Step, Controls } from "react-decision-tree-flow";
import Conclusion from "../Conclusion/Conclusion";

const tree = {
  question1: ["question2", "question3"],
  question2: ["question1", "question3"],
  question3: ["question1", "question2"],
  conclusion: [],
};

const data = [
  {
    tag: "question1",
    question: "Do you want ...?",
    nextTagDesc: ["aaa", "aaa"],
  },
  {
    tag: "question2",
    question: "Do you want 2 ...?",
    nextTagDesc: ["yes", "no"],
  },
  {
    tag: "question3",
    question: "Do you want 3 ...?",
    nextTagDesc: ["yes", "no"],
  },
];

function RenderQuestion({ question }) {
  var currentQuestion = [];
  data.filter((val) => {
    if (val.tag.toLowerCase().includes(question.toLowerCase())) {
      currentQuestion = val;
    }
  });
  return <h1>{currentQuestion.tag}</h1>;
}

function RenderNextTagDesc({ question, index }) {
  var currentQuestion = [];
  data.filter((val) => {
    if (val.tag.toLowerCase().includes(question.toLowerCase())) {
      currentQuestion = val;
    }
  });
  console.log(currentQuestion.nextTagDesc[index]);
  if (currentQuestion.nextTagDesc[index] == null) {
    return <>No description for this button.</>;
  } else {
    return <>{currentQuestion.nextTagDesc[index]}</>;
  }
}

function getQuestion(searchTerm) {}

class DecisionTree extends Component {
  render() {
    return (
      <div className="decisionTreeContainer">
        <Wizard first="question1" tree={tree}>
          {Object.keys(tree).map((key) => (
            <Step name={key} key={key}>
              <Controls>
                {({ tree, step, destinations }) => {
                  return (
                    <div>
                      <RenderQuestion question={step} />
                      {Object.entries(destinations).map(
                        ([key, value], index) => (
                          <button
                            className="btn btn-primary btn-sm"
                            key={key}
                            onClick={value}
                          >
                            <RenderNextTagDesc question={step} index={index} />
                          </button>
                        )
                      )}
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

export default DecisionTree;
