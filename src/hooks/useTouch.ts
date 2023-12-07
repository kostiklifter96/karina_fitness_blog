import { useState } from "react";

export const useTouch = () => {
    const [touchX, setTouchX] = useState<number | null>(null);
    const [touchY, setTouchY] = useState<number | null>(null);
    const [activeStyle, setActiveStyle] = useState(false);

    const addActiveStyle = () => {
        setActiveStyle(!activeStyle);
    };

    const removeActiveStyle = () => {
        setActiveStyle(false);
    };

    const handleTouchStart: React.TouchEventHandler = (e) => {
        const firstTouch = e.touches[0];

        setTouchX(firstTouch.clientX);
        setTouchY(firstTouch.clientY);
    };

    const handleTouchMove: React.TouchEventHandler = (e) => {
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
        }
        // else {
        //     // top - bottom
        //     if (yDiff > 0) {
        //         setActiveStyle(false);
        //     } else {
        //         setActiveStyle(true);
        //     }
        // }

        setTouchX(null);
        setTouchY(null);
    };

    return {
        addActiveStyle,
        removeActiveStyle,
        handleTouchMove,
        handleTouchStart,
        activeStyle,
    };
};
