import React from 'react';
import ReactDOM from 'react-dom';
/*
import { Simulate } from 'react-test-utils';
*/
import '../../setup-enzyme';
import { mount } from 'enzyme';
import App from './App';

describe('<App/>', () => {
  it('has header', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find('.mdc-typography .mdc-typography--display2').text()).toBe('Hello, Material Components!');
  });

  describe('Attached', () => {
    let attachedElement;

    beforeAll(() => {
      attachedElement = document.createElement('div');
      document.body.appendChild(attachedElement);
    });

    beforeEach(() => {
      attachedElement.innerHTML = '';
    });

    afterAll(() => {
      document.body.removeChild(attachedElement);
    });

    it('is initialized', () => {
      const wrapper = mount(<App />, { attachTo: attachedElement });

      try {
        expect(hasDomClass.call(wrapper.find('.mdc-text-field'), 'mdc-text-field--upgraded')).toBeTruthy();
      } finally {
        wrapper.detach();
      }
    });

    it('changes on focused', () => {
      const wrapper = mount(<App />, { attachTo: attachedElement });

      try {
        wrapper.find('.mdc-text-field__input').getDOMNode().focus();
        // "TypeError: Cannot read property 'valid' of undefined",
        // as 'jsdom' has no form validation: https://github.com/jsdom/jsdom/issues/544
        expect(hasDomClass.call(wrapper.find('.mdc-text-field'), 'mdc-text-field--focused')).toBeTruthy();
      } finally {
        wrapper.detach();
      }
    });
  });

  // TODO: Test some behaviors provided by MDC.
});

/**
 * @param {String} className 
 * @returns {Boolean}
 */
function hasDomClass(className) {
  return this.getDOMNode().classList.contains(className);
}
