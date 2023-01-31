import React from "react";

export const PortfolioItem = ({ href, img, img_min, className }) => {
    return (
        <span className='portfolio__item'>
            <picture>
                <source media='(max-width:1200px)' srcSet={img_min} />
                <source media='(min-width:1201px)' srcSet={img} />
                <img src={img} alt='img' className={className} />
            </picture>
        </span>
    );
};
