import React, { useState, useEffect, useReducer, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { useImmerReducer } from 'use-immer'    // Allows modifying of state data directly
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Axios from "axios";
import { CSSTransition } from "react-transition-group";
// Axios.defaults.baseURL = process.env.BACKENDURL || "";


// Contexts


// Components




function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element=""></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}


const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<App />)


// Loading new changes on the fly
if (module.hot) {
    module.hot.accept()
}