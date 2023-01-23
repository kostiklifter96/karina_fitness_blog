import { AboutMeItem } from "./AboutMeItem";

import { data } from "./../../data/data";
export const AboutMe = () => {
    return (
        <section className='about' id='about'>
            <div className='container'>
                <div className='about__wrapper'>
                    <div className='about__photo'></div>

                    <div className='about__descr'>
                        {/* <h2 className='title title__fz16 about__title'>
                            Обо Мне
                        </h2> */}
                        <div className='title title__fz36 about__subtitle'>
                            Меня зовут Карина
                        </div>
                        <div className='divider'></div>
                        <p className='about__text'>
                            Я получила высшее образование по специальности
                            медико-биологическое дело. 5 лет работала
                            фитнес-тренером в тренажерном зале и создала
                            онлайн-проект Naumova team, в котором собираю
                            единомышленниц со всего мира.
                        </p>
                    </div>

                    <div className='about__skills'>
                        {data[0].aboutMe?.map((item) => (
                            <AboutMeItem key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
