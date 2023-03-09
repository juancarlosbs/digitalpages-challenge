import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Details from '../pages/Details';

export default function AppStack() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/details" element={<Details/>}/>
            </Routes>
        </BrowserRouter>
    );
};