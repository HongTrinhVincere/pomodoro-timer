import {
    START_TIMER,
    RUN_TIMER,
    STOP_TIMER,
    RESET_TIMER,
    START_BREAK,
    AUTO_START_TIMER,
    UPDATE_SESSION_LENGTH,
    UPDATE_BREAK_LENGTH,
    TOGGLE_ALARM_SOUND,
    TOGGLE_AUTO_START
} from "./actionTypes";

export const startTimer = () => ({
    type: START_TIMER
});

export const runTimer = () => ({
    type: RUN_TIMER
});

export const stopTimer = () => ({
    type: STOP_TIMER
});

export const resetTimer = () => ({
    type: RESET_TIMER
});

export const startBreak = () => ({
    type: START_BREAK
});

export const autoStartTimer = () => ({
    type: AUTO_START_TIMER
});

export const updateSessionLength = value => ({
    type: UPDATE_SESSION_LENGTH,
    value
});

export const updateBreakLength = value => ({
    type: UPDATE_BREAK_LENGTH,
    value
});

export const toggleAlarmSound = () => ({
    type: TOGGLE_ALARM_SOUND
});

export const toggleAutoStart = () => ({
    type: TOGGLE_AUTO_START
});
