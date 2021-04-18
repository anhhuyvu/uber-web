import React from 'react';
import ReactDom from 'react-dom';
import Dropdown from '../dropdown';

it("renders without crashing", () =>{
    const div = document.createElement("div");
    ReactDom.render(<Dropdown></Dropdown>,div)
})