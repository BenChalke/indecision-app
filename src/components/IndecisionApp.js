import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisonApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({ 
      selectedOption: option 
    }));
  }
  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }))
  }
  handleAddOption = (option) => {
    if (!option) {
      return "Enter a valid value to add item.";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }

    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  }
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption = (optionToRemove) => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return optionToRemove !== option;
      })
    }));
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (error) {
      // Do nothing
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }
  render() {
    const subTitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header subTitle={subTitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
        <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption} />
      </div>
    );
  }
}