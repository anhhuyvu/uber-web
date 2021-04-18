import React from 'react';
import ReactDom from 'react-dom';
import contactPage from '../contactPage';

it("renders without crashing", () =>{
    const div = document.createElement("div");
    ReactDom.render(<contactPage></contactPage>,div)
})