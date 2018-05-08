import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor() {
    super();
    this.state = {
      //value: ''
      balance: '',
      rate: '',
      term: '',
      output: ''
    }
    this.calculate = this.calculate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  calculate(event) {
    event.preventDefault();
    const balance = parseFloat(this.state.balance);
    const rate = (parseFloat(this.state.rate) / 100) / 12;
    const term = 12 * parseFloat(this.state.term);
    const rateFormula = (1+rate)**term;
    
    this.setState({output: '$' + (balance * ((rate * rateFormula) / (rateFormula - 1))).toFixed(2) + ' is your payment.'});
  }

  render() {
    return (
      <div className='container'>
        {/*insert jsx*/} 
        <h3>Mortgage Calculator</h3>
        <form>
          <div className="form-group">
            <label>Loan Balance</label>
              <input name="balance" type="number" value={this.state.balance} onChange={this.handleChange}  placeholder="0"/>
          </div>
          <div className="form-group">
            <label>Interest Rate (%)</label>
              <input name="rate" type="number" value={this.state.rate} onChange={this.handleChange} step="0.01" placeholder="0"/>
          </div>
          <div className="form-group">
            <label>Loan Term (years)</label>
              <select name="term" value={this.state.term} onChange={this.handleChange}>
                <option>Choose</option>
                <option value="15">15</option>
                <option value="30">30</option>
              </select>
          </div>
          <div>
            <button name="submit" onClick={this.calculate}>Calculate</button>
          </div>
          <div id="output" value={this.state.output}>
            <p>{this.state.output}</p>
          </div>
        </form>  
      </div>
    );
  }
}
