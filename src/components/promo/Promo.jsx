import { Link } from "react-router-dom";
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
                    Я фитнес-тренер из города Минска
                </h1>
                <div className='promo__btns'>
                    <a href='#portfolio' className='promo__links-main btn'>
                        Портфолио
                    </a>
                    <a href='#about' className='promo__links'>
                        Про меня
                    </a>
                </div>
            </div>
        </section>
    );
};
