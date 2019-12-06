import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect} from "react-redux";
import store from './store/store';


import "./index.scss";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
serviceWorker.register();
