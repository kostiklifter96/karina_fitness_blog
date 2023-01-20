import React from "react";
import { data } from "./../../data/data";
import { PriceListItem } from "./PriceListItem";

export const PriceList = () => {
    return (
        <section className='price' id='price'>
            <div className='container'>
                <h2 className='title title__fz16 title__section-title'>
                    Прайс-лист
                </h2>
                <div className='divider'></div>

                <div className='price__wrapper'>
                    {data[0].priceList?.map((item) => (
                        <PriceListItem key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};
