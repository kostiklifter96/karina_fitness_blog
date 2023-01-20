import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import App from "./App";
import { Policy } from "./components/Policy/Policy";
import { AboutMe } from "./components/aboutMe/AboutMe";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<App />} />
                <Route path='/policy' element={<Policy />} />
                <Route path='/about' element={<AboutMe />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);
