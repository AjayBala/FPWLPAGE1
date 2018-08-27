// import Routes from './Routes.jsx';
// import React from "react";
// import { Router, Route, browserHistory } from 'react-router'
// import PrivateRoute from "./Components/PrivateRouter/PrivateRouter";
// import history from './history';
// import Login from './Components/Login/Login';
// import CreateAccount from './Components/CreateAccount/CreateAccount';
// import Exitaccount from './Components/Exitaccount/Exitaccount';
// import ShopYesorNo from './Components/ShopYesorNo/ShopYesorNo';
// import SignupPage from './Components/Signup/SignupPage';
// import HomePage from './Components/HomePage/HomePage';
// import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
// import SendEmail from './Components/ForgotPassword/SendEmail';
// import ForgotPasswordEmailTemplate from './Components/ForgotPassword/ForgotPasswordEmailTemplate';
// import Layout from './Components/Layout';
// import Favicon from 'react-favicon';
// import FavImg from '../assets/favicon.ico';
// import Com from '../app/Components/Com/Com';
// import Govt from '../app/Components/Govt/Govt';
// import Enzyme from "enzyme";
// import { shallow, mount } from "enzyme";


// it('renders correct routes', () => {
//   const wrapper = shallow(<Routes />);
//   const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
//     const routeProps = route.props();
//     pathMap[routeProps.path] = routeProps.component;
//     return pathMap;

//   }, {});
//   // { 'nurse/authorization' : NurseAuthorization, ... }

//   expect(pathMap['"/login"']).toBe(Login);
//   expect(pathMap['"/signup"']).toBe(SignupPage);
//   expect(pathMap['"/exist-account"']).toBe(Exitaccount);
//   expect(pathMap['"/com"']).toBe(Com);
//   expect(pathMap['"/gov"']).toBe(Govt);
//   expect(pathMap['"/create-account"']).toBe(CreateAccount);
//   expect(pathMap['"/shop-yesno"']).toBe(SignupPage);
//   expect(pathMap['"/forgot-password"']).toBe(ForgotPassword);
//   expect(pathMap['"/send-email"']).toBe(SendEmail);
//   expect(pathMap['"/email-template"']).toBe(ForgotPasswordEmailTemplate);
// //   expect(pathMap['"/home"']).toBe(HomePage);
  
// });