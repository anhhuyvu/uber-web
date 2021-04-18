import React from 'react';
import ReactDom from 'react-dom';
import registerPage from '../registerPage';

it("renders without crashing", () =>{
    const div = document.createElement("div");
    ReactDom.render(<registerPage></registerPage>,div)
})