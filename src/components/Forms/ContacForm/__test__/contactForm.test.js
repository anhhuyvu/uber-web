import React from 'react';
import ReactDom from 'react-dom';
import contactForm from '../contactForm';

it("renders without crashing", () =>{
    const div = document.createElement("div");
    ReactDom.render(<contactForm></contactForm>,div)
})