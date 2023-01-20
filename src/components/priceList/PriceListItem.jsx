export const PriceListItem = ({ type, price, description }) => {
    return (
        <div className='price__item'>
            <div className='price__item-head'>
                <h4 className='title title__fz14'>{type} </h4>
                <div className='title title__fz14 price__item-price'>
                    {price}
                </div>
            </div>

            <div className='title title__fz12 price__item-description'>
                {description}
            </div>
        </div>
    );
};
