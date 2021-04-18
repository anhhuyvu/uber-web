import React from 'react';
import Header from '../header';
import ReactDom from 'react-dom';

it("renders without crashing", () =>{
    const div = document.createElement("div");
    ReactDom.render(<Header></Header>,div)
})