import { useState } from "react";

export const useTouchToggleMenu = () => {
    const [activeStyle, setActiveStyle] = useState(false);
    const [touchX, setTouchX] = useState(null);
    const [touchY, setTouchY] = useState(null);

    const addActiveStyle = () => {
        setActiveStyle(!activeStyle);
    };

    const removeActiveStyle = () => {
        setActiveStyle(false);
    };

    const handleTouchStart = (e) => {
        const firstTouch = e.touches[0];

        setTouchX(firstTouch.clientX);
        setTouchY(firstTouch.clientY);
    };
    const handleTouchMove = (e) => {
        if (!touchX || !touchY) {
            return false;
        }

        let touchXTwo = e.touches[0].clientX;
        let touchYTwo = e.touches[0].clientY;

        let xDiff = touchXTwo - touchX;
        let yDiff = touchYTwo - touchY;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            // right - left
            if (xDiff > 0) {
                setActiveStyle(true);
            } else {
                setActiveStyle(false);
            }
        } else {
            // top - bottom
            if (yDiff > 0) {
                setActiveStyle(false);
            } else {
                setActiveStyle(true);
            }
        }

        setTouchX(null);
        setTouchY(null);
    };

    return [
        addActiveStyle,
        removeActiveStyle,
        activeStyle,
        handleTouchStart,
        handleTouchMove,
    ];
};
