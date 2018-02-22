import React from 'react';
import ReactDOM from 'react-dom';
import { autoInit } from 'material-components-web';

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="mdc-typography">
        <h2 className="mdc-typography--display2">Hello, Material Components!</h2>
        <div className="mdc-text-field" data-mdc-auto-init="MDCTextField">
            <input type="text" className="mdc-text-field__input" id="demo-input"/>
            <label htmlFor="demo-input" className="mdc-text-field__label">Tell us how you feel!</label>
        </div>
      </div>
    );
  }

  componentDidMount() {
    autoInit();
  }
}
