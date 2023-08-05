import React from "react";
import TextInput from "./textInput.js";
import Button from "./Button.js";
import "../styles/style.scss";

class Form extends React.Component {
  state = {
    height: "",
    weight: "",
    unitSystem: "metric",
    bmi: 0,
    bmiClass: "",
  };

  heightChange = (heightValue) => {
    this.setState({ height: heightValue });
  };

  weightChange = (weightValue) => {
    this.setState({ weight: weightValue });
  };

  unitSystemChange = (event) => {
    this.setState({ unitSystem: event.target.value });
  };

  computeBmi = () => {
    const heightValue = this.state.height.replace(",", ".");
    const weightValue = this.state.weight.replace(",", ".");

    let bmiValue;
    if (this.state.unitSystem === "metric") {
      bmiValue = weightValue / (heightValue * heightValue);
    } else if (this.state.unitSystem === "imperial") {
      const heightInMeters = heightValue * 0.3048;
      const weightInKg = weightValue * 0.453592;
      bmiValue = weightInKg / (heightInMeters * heightInMeters);
    }

    bmiValue = Math.round(bmiValue * 10) / 10;
    this.setState({ bmi: bmiValue });

    let bmiClass = this.getBmi(bmiValue);
    this.setState({ bmiClass: bmiClass });
  };

  getBmi = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight";
    }
    if (bmi >= 18.5 && bmi <= 24.9) {
      return "Normal weight";
    }
    if (bmi >= 25 && bmi <= 29.9) {
      return "Overweight";
    }
    if (bmi >= 30) {
      return "Obese";
    }
  };

  render() {
    return (
      <div className="form">
        <div className="content">
          <div className="row">
            <label>Select Unit System:</label>
            <select
              value={this.state.unitSystem}
              onChange={this.unitSystemChange}
            >
              <option value="metric">Metric</option>
              <option value="imperial">Imperial</option>
            </select>
          </div>
          <div className="row">
            <TextInput
              label={
                this.state.unitSystem === "metric"
                  ? "Height (m)"
                  : "Height (ft)"
              }
              placeholder={
                this.state.unitSystem === "metric"
                  ? "Enter height in meters"
                  : "Enter height in inches"
              }
              onChange={this.heightChange}
            />
          </div>
          <div className="row">
            <TextInput
              label={
                this.state.unitSystem === "metric"
                  ? "Weight (kg)"
                  : "Weight (lb)"
              }
              placeholder={
                this.state.unitSystem === "metric"
                  ? "Enter weight in kg"
                  : "Enter weight in pounds"
              }
              onChange={this.weightChange}
            />
          </div>
          <div className="row">
            <Button label="SUBMIT" onClick={this.computeBmi} />
          </div>
          <div className="row">
            <div className="myOutput">
            <h3>BMI = {this.state.bmi}</h3>
            <h3>{this.state.bmiClass}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
