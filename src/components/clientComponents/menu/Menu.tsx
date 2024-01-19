import { INSTIcon } from "components/clientComponents/svgIcon/INSTIcon";
import { TGIcon } from "components/clientComponents/svgIcon/TGIcon";
import { VKIcon } from "components/clientComponents/svgIcon/VKIcon";
import { IMenu } from "types/types";
import "./menu.scss";

export const Menu = ({ activeStyle, removeActiveStyle }: IMenu) => {
    let menuStyle = "menu";

    if (activeStyle) {
        menuStyle += " active";
    }

    return (
        <div className={menuStyle}>
            <div className='menu__block'>
                <div
                    className='menu__close'
                    onClick={() => removeActiveStyle()}
                >
                    <svg
                        width='30'
                        height='30'
                        viewBox='0 0 29 30'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M17.1568 14.5231L28.4489 3.23075C29.1837 2.49623 29.1837 1.30861 28.4489 0.574085C27.7144 -0.160437 26.5267 -0.160437 25.7922 0.574085L14.4998 11.8665L3.20781 0.574085C2.47295 -0.160437 1.28567 -0.160437 0.551149 0.574085C-0.183716 1.30861 -0.183716 2.49623 0.551149 3.23075L11.8432 14.5231L0.551149 25.8155C-0.183716 26.55 -0.183716 27.7376 0.551149 28.4721C0.917206 28.8385 1.39852 29.0226 1.87948 29.0226C2.36045 29.0226 2.84141 28.8385 3.20781 28.4721L14.4998 17.1798L25.7922 28.4721C26.1586 28.8385 26.6396 29.0226 27.1205 29.0226C27.6015 29.0226 28.0825 28.8385 28.4489 28.4721C29.1837 27.7376 29.1837 26.55 28.4489 25.8155L17.1568 14.5231Z'
                            fill='black'
                        />
                    </svg>
                </div>
                <nav>
                    <ul className='menu__list'>
                        <li
                            className='menu__link'
                            onClick={() => removeActiveStyle()}
                        >
                            <a href='#about'>ЗА ЭТИ 3 НЕДЕЛИ ВЫ</a>
                        </li>
                        <li
                            className='menu__link'
                            onClick={() => removeActiveStyle()}
                        >
                            <a href='#program'>NAUMOVA_TEAM</a>
                        </li>{" "}
                        <li
                            className='menu__link'
                            onClick={() => removeActiveStyle()}
                        >
                            <a href='#resume'>ПРЕИМУЩЕСТВА</a>
                        </li>
                        <li
                            className='menu__link'
                            onClick={() => removeActiveStyle()}
                        >
                            <a href='#portfolio'>ДО / ПОСЛЕ</a>
                        </li>
                        <li
                            className='menu__link'
                            onClick={() => removeActiveStyle()}
                        >
                            <a href='#promoTraining'>ТРЕНИРОВКА ЯГОДИЦ</a>
                        </li>
                        <li
                            className='menu__link'
                            onClick={() => removeActiveStyle()}
                        >
                            <a href='#listQuestions'>ВОПРОС - ОТВЕТ</a>
                        </li>
                        <li
                            className='menu__link'
                            onClick={() => removeActiveStyle()}
                        >
                            <a href='#calorieСalculator'>
                                РАСЧЕТ КАЛОРИЙ ДЛЯ ДЕВУШЕК
                            </a>
                        </li>
                        <li
                            className='menu__link'
                            onClick={() => removeActiveStyle()}
                        >
                            <a href='#contacts'>КОНТАКТЫ</a>
                        </li>
                    </ul>
                </nav>

                <div className='menu__social'>
                    <a
                        href='https://t.me/Naumova_karina'
                        target='blank'
                        className='menu__social-link tg_btn-menu'
                    >
                        <TGIcon />
                    </a>
                    <a
                        href='https://vk.com/public222068936'
                        target='blank'
                        className='menu__social-link vk_btn-menu'
                    >
                        <VKIcon />
                    </a>

                    <a
                        href='https://www.instagram.com/naumova_karina/?hl=ru'
                        target='blank'
                        className='menu__social-link inst_btn-menu'
                    >
                        <INSTIcon />
                    </a>
                </div>
            </div>
            <div
                className='menu__overlay'
                onClick={() => removeActiveStyle()}
            ></div>
        </div>
    );
};
