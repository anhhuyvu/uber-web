import React from 'react';
import ReactDom from 'react-dom';
import SignUpForm from '../CheckoutPage';

it("renders without crashing", () =>{
    const div = document.createElement("div");
    ReactDom.render(<SignUpForm></SignUpForm>,div)
})