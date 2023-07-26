import React from 'react';

class TextInput extends React.Component {
    render() {
        return(
            <div class="label">
                <label>{ this.props.label }</label>
                <input
                  type="text"
                  value={this.props.value}
                  placeholder={this.props.placeholder}
                  onChange={this.handleChange}
                />
            </div>
        )
    }

    handleChange = (event) => {
        let inputValue = event.target.value;
        this.props.onChange(inputValue);
    };
}

export default TextInput;
