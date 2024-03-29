import React from "react";
import PropTypes from "prop-types";

import "./settings.scss";

// session length value between 0 to 60 in minutes - handle stepup,stepdown,input change
function handleSessionLength(value, dispatchSessionUpdate) {
    if ((value > 0 && value <= 60) || value === "") {
        dispatchSessionUpdate(value);
        // update clock time
    }
}

// break length value between 0 to 15 in minutes - handle stepup,stepdown,input change
function handleBreakLength(value, dispatchBreakUpdate) {
    if ((value > 0 && value <= 15) || value === "") {
        dispatchBreakUpdate(value);
    }
}

export default function PomodoroTimerSettings({
    sessionLength,
    breakLength,
    isAlarmON,
    isAutoStartON,
    updateSessionLength,
    updateBreakLength,
    toggleAlarmSound,
    toggleAutoStart
}) {
    return (
        <div className="settings">
            <h2>Timer Settings</h2>
            <div className="input-control">
                <label htmlFor="session">
                    Session Length
                    <div className="input-group">
                        <input
                            type="button"
                            name="step-down-session"
                            value="-"
                            onClick={() =>
                                handleSessionLength(
                                    sessionLength - 1,
                                    updateSessionLength
                                )
                            }
                        />

                        <input
                            type="number"
                            id="session"
                            min="1"
                            max="60"
                            value={sessionLength}
                            name="session-length"
                            onChange={event =>
                                handleSessionLength(
                                    event.target.value,
                                    updateSessionLength
                                )
                            }
                        />

                        <input
                            type="button"
                            name="step-up-session"
                            value="+"
                            onClick={() =>
                                handleSessionLength(
                                    sessionLength + 1,
                                    updateSessionLength
                                )
                            }
                        />
                    </div>
                </label>
            </div>
            <div className="input-control">
                <label htmlFor="break">
                    Break Length
                    <div className="input-group">
                        <input
                            type="button"
                            name="step-down-break"
                            value="-"
                            onClick={() =>
                                handleBreakLength(
                                    breakLength - 1,
                                    updateBreakLength
                                )
                            }
                        />
                        <input
                            type="number"
                            id="break"
                            min="1"
                            max="20"
                            value={breakLength}
                            name="break-length"
                            onChange={event =>
                                handleBreakLength(
                                    event.target.value,
                                    updateBreakLength
                                )
                            }
                        />
                        <input
                            type="button"
                            name="step-up-break"
                            value="+"
                            onClick={() =>
                                handleBreakLength(
                                    breakLength + 1,
                                    updateBreakLength
                                )
                            }
                        />
                    </div>
                </label>
            </div>
            <div className="input-control alaram-sound">
                <label htmlFor="sounds">
                    <input
                        type="checkbox"
                        id="sounds"
                        name="alaramsounds"
                        checked={isAlarmON}
                        onChange={toggleAlarmSound}
                    />
                    <span className="custom-checkbox" />
                    Sound
                </label>
            </div>
            <div className="input-control auto-start">
                <label htmlFor="auto-start">
                    <input
                        type="checkbox"
                        id="auto-start"
                        name="autostart"
                        checked={isAutoStartON}
                        onChange={toggleAutoStart}
                    />
                    <span className="custom-checkbox" />
                    Repeat Timer
                </label>
            </div>
        </div>
    );
}

PomodoroTimerSettings.propTypes = {
    sessionLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
    breakLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
    updateSessionLength: PropTypes.func.isRequired,
    updateBreakLength: PropTypes.func.isRequired,
    toggleAlarmSound: PropTypes.func.isRequired,
    toggleAutoStart: PropTypes.func.isRequired,
    isAlarmON: PropTypes.bool.isRequired,
    isAutoStartON: PropTypes.bool.isRequired
};
