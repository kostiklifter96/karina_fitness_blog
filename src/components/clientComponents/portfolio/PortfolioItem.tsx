import { IPortfolio } from "types/types";

export const PortfolioItem = ({ href, img, className }: IPortfolio) => {
    return (
        <span className='portfolio__item'>
            <picture>
                <source media='(max-width:1200px)' srcSet={img[1]} />
                <source media='(min-width:1201px)' srcSet={img[0]} />
                <img src={img[0]} alt='img' className={className} />
            </picture>
        </span>
    );
};
