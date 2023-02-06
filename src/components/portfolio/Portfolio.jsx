import { PortfolioItem } from "./PortfolioItem";
import { data } from "./../../data/data";
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
                    {data[0].portfolio?.map((item) => (
                        <PortfolioItem key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};
