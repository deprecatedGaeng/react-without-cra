import React from 'react';
import Test from '../src/Test';
import { mount,configure,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe("<Test />", () => {
  it("Snapshot Test", () => {
    const container = mount(<Test name="Cho" />);
    expect(container).toMatchSnapshot(); 
  })

  it('Props', () => {
    const container = mount(<Test name="Cho" />);
    expect(container.props().name).toBe('Cho');
  });

  it('Event Handler', () => {
    const container = mount(<Test name="Cho" />);
    const button = container.findWhere(node => node.type() === "button");
    button.simulate("click");

    const span = container.find('span');

    expect(span.text()).toBe('CLICKED');
  });
})