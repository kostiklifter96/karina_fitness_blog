import React from "react";

export const SkillsItem = ({ title, description, img }) => {
    return (
        <div className='skills__item'>
            <div className='skills__item-img'>
                <img src={img} alt={title} />
            </div>
            <h3 className='title title__fz14'>{title}</h3>
            <p className='title title__fz12'>{description}</p>
        </div>
    );
};
