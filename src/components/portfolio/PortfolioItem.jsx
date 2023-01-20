import React from "react";

export const PortfolioItem = ({ href, img, className }) => {
    return (
        <span className='portfolio__item'>
            <img src={img} alt={href} className={className} />
        </span>
    );
};
