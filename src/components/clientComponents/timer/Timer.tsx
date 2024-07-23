import { useTimer } from "hooks/useTimer";
import "./timer.scss";

export const Timer = () => {
    const date = new Date("Thu, 08 Jul 2024 00:00:00");

    const { day, hours, minutes, seconds, diffDays, diffS, diffH, diffM } =
        useTimer({ date });

    return (
        <section className='timer'>
            <div className='container'>
                <div className='title title__fz36 timer__title'>
                    {/* До старта осталось: */}
                    До старта осталось:
                </div>{" "}
                <div className='timer__grid'>
                    <div className='timer__grid-item'>
                        <div className='timer__grid-item-num'>{diffDays}</div>{" "}
                        <div>{day}</div>
                    </div>
                    <div className='timer__grid-item'>
                        <div className='timer__grid-item-num'>
                            {diffH.toString().padStart(2, "0")}
                        </div>{" "}
                        <div>{hours}</div>
                    </div>
                    <div className='timer__grid-item'>
                        <div className='timer__grid-item-num'>
                            {diffM.toString().padStart(2, "0")}
                        </div>{" "}
                        {minutes}
                    </div>
                    <div className='timer__grid-item'>
                        <div className='timer__grid-item-num'>
                            {diffS.toString().padStart(2, "0")}
                        </div>{" "}
                        <div>{seconds}</div>
                    </div>
                </div>
            </div>
        </section>
    );
};
