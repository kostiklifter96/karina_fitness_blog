import { MarqueeComponent } from "components/index";
import { useEffect, useState } from "react";
import { getPaymentURL } from "utils/getPaymentURL";
import { data } from "../../../data/data";
import "./aboutMe.scss";

export const AboutMe = () => {
    const [linkUrl, setLinkUrl] = useState<string>("");

    const handlerPay = async () => {
        setLinkUrl(
            await getPaymentURL(Number(process.env.REACT_APP_GENERAL_PRICE)),
        );
    };

    useEffect(() => {
        handlerPay();
    }, []);

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
                            За эти 3 недели вы:
                        </div>
                        <div className='divider'></div>
                        {data[0].aboutMe?.map((el) => (
                            <p className='about__text' key={el.id}>
                                {el.description}
                            </p>
                        ))}
                        <MarqueeComponent
                            background='rgb(236, 201, 26)'
                            speed={140}
                            height='30px'
                        >
                            <div>&#10140;</div>

                            <div>
                                {`     `}без жёстких диет {`     `}
                            </div>
                            <div>&#10140;</div>

                            <div>
                                {`     `}тренировки для разных уровней
                                подготовки{`     `}
                            </div>
                            <div>&#10140;</div>
                            <div>
                                {`     `}до -5кг{`     `}
                            </div>
                        </MarqueeComponent>{" "}
                    </div>

                    <div className='about__btn'>
                        <a
                            href={linkUrl}
                            className='btn'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Хочу красивое тело
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
