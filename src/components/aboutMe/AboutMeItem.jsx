import React from "react";

export const AboutMeItem = ({ title, description, img }) => {
    return (
        <div className='about__skills-item'>
            <div className='about__skills-circle'>
                <img src={img} alt={title} />
            </div>
            <div>
                <div className='title title__fz14'>{title}</div>
                <div className='about__skills-text'>{description} </div>
            </div>
        </div>
    );
};
