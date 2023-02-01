export const Promo = ({ addActiveStyle }) => {
    return (
        <section className='promo'>
            <div className='hamburger' onClick={() => addActiveStyle()}>
                <span></span>
                <span className='long'></span>
                <span></span>
            </div>

            <div className='container'>
                <div className='title title__fz16 promo__subtitle'>
                    Меня зовут Карина Наумова
                </div>
                <h1 className='title title__fz48 promo__title'>
                    Я фитнес-тренер онлайн
                </h1>
                <div className='promo__btns'>
                    <a href='#skills' className='promo__links-main btn'>
                        О проекте
                    </a>
                    <a href='#about' className='promo__links'>
                        Обо мне
                    </a>
                </div>
            </div>
        </section>
    );
};
