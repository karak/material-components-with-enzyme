import React from 'react';
import ReactDOM from 'react-dom';
/*
import { Simulate } from 'react-test-utils';
*/
import '../../setup-enzyme';
import { mount, shallow } from 'enzyme';
import App from './App';

describe('<App/>', () => {
  it('has header', () => {
    const wrapper = shallow(<App />);

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

    it('auto-initialized', () => {
      const wrapper = mount(<App />, { attachTo: attachedElement });

      try {
        expect(wrapper.find('.mdc-text-field').getDOMNode().getAttribute('data-mdc-auto-init')).toBe('MDCTextField');
        expect(hasDomClass.call(wrapper.find('.mdc-text-field'), 'mdc-text-field--upgraded')).toBeTruthy();
      } finally {
        wrapper.detach();
      }
    });

    it('changes on focused', () => {
      const wrapper = mount(<App />, { attachTo: attachedElement });

      try {
        const clickEvent = document.createEvent('MouseEvent');
        clickEvent.initEvent('click', true, true);
        wrapper.find('.mdc-text-field').getDOMNode().dispatchEvent(clickEvent);
        /*
        wrapper.find('.mdc-text-field').getDOMNode().click();
        */
        /*
        const field = wrapper.find('.mdc-text-field').getDOMNode();
        const clickEvent = document.createEvent('MouseEvent');
        clickEvent.initMouseEvent('click', true, true, window, undefined, 0, 0, 0, 0, false, false, false, false, 0, field);
        field.dispatchEvent(clickEvent);
        */
        /*
        Simulate.click(wrapper.find('.mdc-text-field').getDOMNode());
        */
        console.info(attachedElement.innerHTML);
        //wrapper.update();
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
