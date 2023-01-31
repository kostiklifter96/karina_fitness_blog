import React from "react";
import ResumeItem from "./ResumeItem";
import { data } from "./../../data/data";

export const Resume = () => {
    return (
        <section className='resume' id='resume'>
            <div className='container'>
                {/* <h2 className='title title__fz16 title__section-title'>
                    Образование
                </h2> */}
                <div className='title title__fz36 title__section-subtitle'>
                    Образование
                </div>
                <div className='divider'></div>

                <div className='resume__wrapper'>
                    <div className='resume__column'>
                        {/* <h3 className='title title__fz20 resume__column-title'>
                            Образование
                        </h3> */}
                        <ul>
                            {data[0].firstColumn?.map((el) => (
                                <ResumeItem key={el.id} {...el} />
                            ))}
                        </ul>
                    </div>
                    <div className='resume__column'>
                        {/* <h3 className='title title__fz20 resume__column-title'>
                            Опыт работы
                        </h3> */}
                        <ul>
                            {data[0].secondColumn?.map((el) => (
                                <ResumeItem key={el.id} {...el} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
