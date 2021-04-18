import React from 'react';
import ReactDom from 'react-dom';
import welcomePage from '../welcomePage';

it("renders without crashing", () =>{
    const div = document.createElement("div");
    ReactDom.render(<welcomePage></welcomePage>,div)
})