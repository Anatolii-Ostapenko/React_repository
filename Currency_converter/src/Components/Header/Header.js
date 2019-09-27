import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyCode: ""
    };
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
 
  render() {
    let currency = (this.props.currency) ? this.props.currency : [];
    
    return (
      <div className="header-body">
        <div className='pages'>
          <div onClick={() => { this.props.setPage(0) }}>Currency Converter</div>
          <div onClick={() => { this.props.setPage(1) }}>Exchange rate</div>
        </div>
        <FormControl>
          <NativeSelect defaultValue={0} input={<Input name="name" id="uncontrolled-native" />}
            onChange={(e) => this.props.mySelectСurrency(e.target.value)}>
            <option value={0} disabled>Select base currency</option>
            {
              currency.map((currency, index) => {
                return (
                  <option key={index} value={currency.code}>{currency.code + ' - ' + currency.name}</option>
                )
              })
            }
          </NativeSelect>
        </FormControl>
      </div>
    )
  }
};


