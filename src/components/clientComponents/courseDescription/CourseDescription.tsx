import { MarqueeComponent } from "components/index";
import { useEffect, useState } from "react";
import { getPaymentURL } from "utils/getPaymentURL";
import { data } from "../../../data/data";
import "./courseDescription.scss";

export const CourseDescription = () => {
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
        <section className='courseDescription' id='courseDescription'>
            <div className='container'>
                <div className='courseDescription__wrapper'>
                    <div className='courseDescription__photo'></div>

                    <div className='courseDescription__descr'>
                        {/* <h2 className='title title__fz16 courseDescription__title'>
                            Обо Мне
                        </h2> */}
                        <div className='title title__fz36 courseDescription__subtitle'>
                            За эти 3 недели вы:
                        </div>
                        <div className='divider'></div>
                        {data[0].aboutMe?.map((el) => (
                            <p className='courseDescription__text' key={el.id}>
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

                    <div className='courseDescription__btn'>
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
