import { useEffect, useState } from "react";

export const useTimer = ({ date }: { date: Date }) => {
    const [finishTime] = useState(date.getTime());
    const [[diffDays, diffH, diffM, diffS], setDiff] = useState([0, 0, 0, 0]);
    const [tick, setTick] = useState(false);
    const [isTimeout, setIsTimeout] = useState(false);
    const [timerId, setTimerID] = useState(0);
    const [day, setDay] = useState<string>("");
    const [hours, setHours] = useState<string>("");
    const [minutes, setMinutes] = useState<string>("");
    const [seconds, setSeconds] = useState<string>("");

    const handlerDays = (number: number) => {
        if (number > 10 && [11, 12, 13, 14].includes(number % 100))
            return setDay("дней");

        let last_num = number % 10;
        if (last_num === 1) {
            return setDay("День");
        }

        if ([2, 3, 4].includes(last_num)) {
            return setDay("Дня");
        }

        if ([5, 6, 7, 8, 9, 0].includes(last_num)) {
            return setDay("Дней");
        }
    };

    const handlerHours = (number: number) => {
        const a = [2, 3, 4];
        if (a.includes(number)) {
            return setHours("Часа");
        }

        if ((number >= 5 && number <= 19) || number === 0) {
            return setHours("Часов");
        }
        if (number === 1 || number === 21) {
            return setHours("Час");
        }
    };

    const handlerMinOrSec = (
        number: number,
        minOrSec: "seconds" | "minutes",
    ) => {
        let m = Math.abs(number) % 100;
        let n1 = m % 10;
        if (m > 10 && m < 20) {
            return (
                (minOrSec === "minutes" && setMinutes("Минут")) ||
                (minOrSec === "seconds" && setSeconds("Cекунд"))
            );
        }
        if (n1 > 1 && n1 < 5) {
            return (
                (minOrSec === "minutes" && setMinutes("Минуты")) ||
                (minOrSec === "seconds" && setSeconds("Cекунды"))
            );
        }
        if (n1 == 1) {
            return (
                (minOrSec === "minutes" && setMinutes("Минута")) ||
                (minOrSec === "seconds" && setSeconds("Cекунда"))
            );
        }
        return (
            (minOrSec === "minutes" && setMinutes("Минут")) ||
            (minOrSec === "seconds" && setSeconds("Cекунд"))
        );
    };

    useEffect(() => {
        handlerDays(diffDays);
        handlerHours(diffH);
        handlerMinOrSec(diffM, "minutes");
        handlerMinOrSec(diffS, "seconds");
    }, [diffDays, diffH, diffM, diffS]);

    useEffect(() => {
        const diff = (finishTime - Date.now()) / 1000;
        if (diff < 0) {
            setIsTimeout(true);
            return;
        }
        setDiff([
            Math.floor(diff / 86400), // дни
            Math.floor((diff / 3600) % 24),
            Math.floor((diff / 60) % 60),
            Math.floor(diff % 60),
        ]);
    }, [tick, finishTime]);

    useEffect(() => {
        if (isTimeout) clearInterval(timerId);
    }, [isTimeout, timerId]);

    useEffect(() => {
        const timerID = setInterval(() => {
            setTick(!tick);
        }, 1000);
        setTimerID(+timerID);
        return () => clearInterval(timerID);
    }, [tick]);

    return { day, hours, minutes, seconds, diffDays, diffS, diffH, diffM };
};
