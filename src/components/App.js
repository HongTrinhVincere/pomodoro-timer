import React from "react";

import Header from "./Header/Header";
import PomodoroTimer from "../containers/PomodoroTimer";

import "./App.scss";

export default function App() {
    return (
        <div>
            <div className="container">
                <Header />
                <div className="content">
                    <PomodoroTimer />
                </div>
            </div>
        </div>
    );
}
