import React from 'react';
import ReactDom from 'react-dom';
import Footer from '../footer';

it("renders without crashing", () =>{
    const div = document.createElement("div");
    ReactDom.render(<Footer></Footer>,div)
})