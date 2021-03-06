import React from "react";
import Enzyme from "enzyme";
import { shallow, mount } from "enzyme";
import { renderWithStore } from "../../test.util";
import ForgotWrapper, {ForgotPassword} from './ForgotPassword';
import sinon from 'sinon';


describe("ForgotPassword", () => {


  //To check whether class has been defined in Login 

  it("should render the component items properly", () => {
    const component = shallow(<ForgotPassword handleSubmit={() => { }} />);
    expect(component.contains("form-group")).toBeDefined();
  });

  it("should render the component items properly", () => {
    const component = shallow(<ForgotPassword handleSubmit={() => { }} />);
    expect(component.contains("loginBoxWrap")).toBeDefined();
  });



  //to check whether redux store contains ForgotPassword Form
  it("should render the mounted wrapper properly", () => {
    const component = renderWithStore(ForgotWrapper);
    expect(component.find(ForgotPassword)).toBeDefined();
  });
  //to check whethe
  it("should email,passord and submit inputs in  the mounted wrapper properly", () => {
    //todo use common method renderWithStore
    const component = renderWithStore(ForgotWrapper);

    expect(
      component.find('input[type="password"][name="password"]').length
    ).toBe(1);
  });
  //check the functionality
  it("should email,passord and submit form on click with entered input values", () => {
    const component = renderWithStore(ForgotWrapper);
    console.log(component.debug());
  });

  
  describe('Test Button component', () => {
    it('Test click event', () => {
      const mockCallBack = jest.fn();

      const button = shallow((<button onClick={mockCallBack}>Ok!</button>));
      button.find('button').simulate('submit');
      expect(mockCallBack.mock.calls.length).toHaveBeenCalled();
    });
  });

  describe('the user does not populate the input field', () => {
    it('should display an error', () => {
      const form = wrapper.find('form').first();
      form.simulate('submit', {
        preventDefault: () => { },
        target: [
          {
            value: ''
          }
        ],
      });
      expect(wrapper.text()).toBe('it need not to be empty')
    });

  });

  it('simulates click events1', () => {

   const page = <ForgotPassword handleSubmit={() => { }} />;
 pageMounted = mount(page);

    const button = pageMounted.find('div loginBox.btnSignIn');
    expect(button.length).toBe(1);
    button.simulate('click');
  });

  it('simulates click events2', () => {
    const onButtonClick = sinon.spy();
    const handleSubmit = jest.fn();

    const wrapper = shallow(<ForgotPassword handleSubmit={() => { }} />);
    console.log(wrapper.debug())
    wrapper.find('form-group').simulate('click');

    expect(onButtonClick).to.have.property('callCount', 1);
  });




});