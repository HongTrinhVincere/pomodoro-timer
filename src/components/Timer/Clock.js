import React from "react";
import PropTypes from "prop-types";

import FormattedTime from "./FormattedTime";

export default function Clock({ clockTime, secondsElapsed }) {
    const time = clockTime - secondsElapsed;

    return (
        <div className="clock-ring-one">
            <div className="clock-ring-two">
                <div className="clock-ring-three">
                    <div className="clock-time">
                        <FormattedTime time={time} />
                    </div>
                </div>
            </div>
        </div>
    );
}

Clock.propTypes = {
    clockTime: PropTypes.number.isRequired,
    secondsElapsed: PropTypes.number.isRequired
};
