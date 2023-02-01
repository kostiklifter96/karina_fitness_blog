import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./App";
import { Policy } from "./components/Policy/Policy";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter
        //  basename='/karina_fitness_blog'
        >
            <Routes>
                <Route exact path='/' element={<App />} />
                <Route path='/policy' element={<Policy />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);
