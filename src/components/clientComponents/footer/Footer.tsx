import { Link } from "react-router-dom";
import "./footer.scss";

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer__nav'>
                    <div className='footer__left'>
                        <div>Наумова Карина Дмитриевна</div>
                        <div>УНП: КВ3361428</div>
                        {/* <div>104 Инспекция МНС по Московскому району г.Минска</div> */}
                    </div>

                    <div className='footer__center'>
                        <div>
                            <Link
                                to='/offer'
                                style={{ color: "rgb(200, 197, 197)" }}
                            >
                                Договор Оферты
                            </Link>{" "}
                        </div>
                        <div>
                            <Link
                                to='/policy'
                                style={{ color: "rgb(200, 197, 197)" }}
                            >
                                Политика Конфиденциальности
                            </Link>{" "}
                        </div>
                        <div>
                            <a href='oplataCartoi.docx' download>
                                Как оплатить
                            </a>
                        </div>
                    </div>

                    <div className='footer__right'>
                        <div>
                            <a href='tel:+375333764764'> +375 33 376-47-64</a>
                        </div>
                        <div>
                            {" "}
                            <a href='mailto:naumova_team@mail.ru'>
                                naumova_team@mail.ru
                            </a>
                        </div>
                        <div>Режим работы: Круглосуточно</div>

                        {/* <div>104 Инспекция МНС по Московскому району г.Минска</div> */}
                    </div>
                </div>

                <div className='footer__payment'>
                    <img
                        src='image/payment/2.2. Цвет-Прозрачный (232).png'
                        alt='payment'
                    />
                </div>
            </div>
        </footer>
    );
};
