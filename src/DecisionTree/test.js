import React, { Component } from "react";
import { Wizard, Step, Controls } from "react-decision-tree-flow";

const tree = {
  step1: ['step2', 'step3'],
  step2: ['step3'],
  step3: [],
}

const WizardInternals = () => {
  const { step, destinations } = useControls<typeof tree>();
  React.useEffect( () => {
    console.log(`I can do things with ${step}`)
  }, [step])
  return (
    <>
      <Step name="step1">
        <span> Hello From Step 1</span>
      </Step>
      <Step name="step2">
        <span> Hello From Step 2</span>
      </Step>
      <Step name="step3">
        <span> Hello From Step 3. The end!</span>
      </Step>
      {
        Object.entries(destinations).map(([stepName, goToStep]) => {
          return (
            <button key="stepName" onClick={goToStep}>
              Go to {stepName}
            </button>
          );
        })
      }
    </>
  );
};

const MyWizard = () => {
  return (
    <Wizard tree={tree} first="step1">
      <WizardInternals />
    </Wizard>
  );
};