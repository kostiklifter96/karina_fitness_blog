import { data } from "data/data";
import "./aboutMe.scss";

export const AboutMe = () => {
    return (
        <section className='aboutMe' id='aboutMe'>
            <div className='container'>
                <div className='aboutMe__wrapper'>
                    <div className='aboutMe__descr'>
                        <div className='title title__fz36 aboutMe__title'>
                            Обо мне
                        </div>
                        <div className='dividerr'></div>

                        <div className='aboutMe__text'>
                            {data[0].aboutMe?.map((el) => (
                                <div className='aboutMe__item' key={el.id}>
                                    <p
                                        className='aboutMe__item-icon'
                                        key={el.id}
                                    >
                                        {el.aducationOrJob}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='aboutMe__photo'></div>
                </div>
            </div>
        </section>
    );
};
