import React from "react";

class TextInput extends React.Component {
  handleChange = (event) => {
    let inputValue = event.target.value;
    this.props.onChange(inputValue);
  };

  render() {
    const { label, value, placeholder } = this.props;

    return (
      <div className="myLabel">
        <label>{label}</label>
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
export default TextInput;
