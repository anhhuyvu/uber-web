import React from 'react';
import ReactDom from 'react-dom';
import OTPForm from '../otpForm';

it("renders without crashing", () =>{
    const div = document.createElement("div");
    ReactDom.render(<OTPForm></OTPForm>,div)
})