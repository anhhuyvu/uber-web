import React from 'react';
import ReactDom from 'react-dom';
import mapPage from '../mapPage';

it("renders without crashing", () =>{
    const div = document.createElement("div");
    ReactDom.render(<mapPage></mapPage>,div)
})