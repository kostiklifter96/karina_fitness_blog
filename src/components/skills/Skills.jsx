import React from "react";
import { data } from "./../../data/data";
import { SkillsItem } from "./SkillsItem";
import { SkillsRaitingList } from "./SkillsRaitingList";

export const Skills = () => {
    return (
        <section className='skills' id='skills'>
            <div className='container'>
                {/* <h2 className='title title__fz16 title__section-title'>
                    Навыки
                </h2> */}
                <div className='title title__fz36 title__section-subtitle'>
                    Программа Naumova_team
                </div>
                <div className='divider'></div>

                <div className='skills__items'>
                    {data[0].skills?.map((item) => (
                        <SkillsItem key={item.id} {...item} />
                    ))}
                </div>

                {/* <div className='skills__ratings'>
                    {data[0].level.map((item) => (
                        <SkillsRaitingList key={item.id} {...item} />
                    ))}
                </div> */}
            </div>
        </section>
    );
};
