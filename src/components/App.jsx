import React from 'react';
import ReactDOM from 'react-dom';
import { MDCTextField } from '@material/textfield';

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="mdc-typography">
        <h2 className="mdc-typography--display2">Hello, Material Components!</h2>
        <div className="mdc-text-field" ref={(input) => this.root = input}>
            <input type="text" className="mdc-text-field__input" id="demo-input"/>
            <label htmlFor="demo-input" className="mdc-text-field__label">Tell us how you feel!</label>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.component = MDCTextField.attachTo(this.root);
  }

  componentWillUnmount() {
    this.component.destroy();
    this.component = null;
  }
}
