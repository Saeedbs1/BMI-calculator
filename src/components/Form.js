import React from "react";
import TextInput from "./textInput.js";
import Button from "./Button.js";
import "../styles/style.scss";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: "",
      weight: "",
      bmi: 0,
      bmiClass: ""
    };

    this.heightChange = this.heightChange.bind(this);
    this.weightChange = this.weightChange.bind(this);
    this.computeBmi = this.computeBmi.bind(this);
  }

  heightChange(heightValue) {
    this.setState({ height: heightValue });
  }

  weightChange(weightValue) {
    this.setState({ weight: weightValue });
  }

  computeBmi() {
    let bmiValue = this.state.weight / (this.state.height * this.state.height);
    this.setState({ bmi: bmiValue });
    let bmiClass = this.getBmi(bmiValue);
    this.setState({ bmiClass: bmiClass });
  }

  getBmi(bmi) {
    if (bmi < 18.5) {
      return "Underweight";
    }
    if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal weight";
    }
    if (bmi >= 25 && bmi < 29.9) {
      return "Overweight";
    }
    if (bmi >= 30) {
      return "Obese";
    }
  }

  render() {
    return (
      <div className="form">
        <div className="content">
        <div className="row">
          <TextInput
            label="Height"
            placeholder="Enter height in meters"
            onChange={this.heightChange}
          />
        </div>
        <div className="row">
          <TextInput
            label="Weight"
            placeholder="Enter weight in kg"
            onChange={this.weightChange}
          />
        </div>
      
        <div className="row">
          <Button label="SUBMIT" onClick={this.computeBmi} />
        </div>
        <div className="output">
        <div className="row">
          <h3>BMI = {this.state.bmi}</h3>
        </div>
        <div className="row">
          <h3>{this.state.bmiClass}</h3>
        </div>
        </div>
      </div>
</div>
    );
  }
}

export default Form;
