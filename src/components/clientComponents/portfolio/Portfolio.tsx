import { IPortfolio } from "types/types";
import { data } from "../../../data/data";
import { PortfolioItem } from "./PortfolioItem";
import "./portfolio.scss";

const portfolio: IPortfolio[] = data[0].portfolio;

export const Portfolio = () => {
    return (
        <section className='portfolio' id='portfolio'>
            <div className='container'>
                {/* <h2 className='title title__fz16 title__section-title'>
                    Портфолио
                </h2> */}
                <div className='title title__fz36 title__section-subtitle'>
                    До/После
                </div>
                <div className='divider'></div>

                <div className='portfolio__wrapper'>
                    {portfolio.map((item: IPortfolio) => (
                        <PortfolioItem key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};
