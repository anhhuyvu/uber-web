import React from 'react';
import ReactDom from 'react-dom';
import InforForm from '../InforForm';

it("renders without crashing", () =>{
    const div = document.createElement("div");
    ReactDom.render(<InforForm></InforForm>,div)
})