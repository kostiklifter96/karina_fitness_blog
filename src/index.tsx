import React from "react";
import ReactDOM from "react-dom/client";
import TagManager from "react-gtm-module";
import { Provider } from "react-redux";
import { store } from "store/store";
import App from "./App";

const tagManagerArgs = {
    gtmId: process.env.REACT_APP_GOOGLE!,
};

TagManager.initialize(tagManagerArgs);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
);
