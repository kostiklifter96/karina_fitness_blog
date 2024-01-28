import { MarqueeComponent } from "components/index";
import { data } from "../../../data/data";
import "./courseDescription.scss";

export const CourseDescription = () => {
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
                        <div className='dividerr'></div>
                        {data[0].courseDescription?.map((el) => (
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
                </div>
            </div>
        </section>
    );
};
<a
    href={"courseDescription"}
    className='btn'
    // target='_blank'
    rel='noreferrer'
>
    Оплатить
</a>;
