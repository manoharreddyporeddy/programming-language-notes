import React from 'react';
import { shallow } from 'enzyme';
import CheckboxWithLabel from '../CheckboxWithLabel';

test('CheckboxWithLabel changes the text after click', () => {

    // Render a component1 with label in the document
    const component1 = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

    expect(component1.text()).toEqual('Off');
    component1.find('input').simulate('change');
    expect(component1.text()).toEqual('On');

});
