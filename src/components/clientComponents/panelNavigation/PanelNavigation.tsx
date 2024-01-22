import { useEffect, useState } from "react";
import { IPromoHeader } from "types/types";
import "./panelNavigation.scss";

export const PanelNavigation = ({ addActiveStyle }: IPromoHeader) => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            setVisible(
                prevScrollPos > currentScrollPos || currentScrollPos === 0,
            );

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <header
            className='panelNavigation'
            style={{ top: visible ? "0" : "-70px" }}
        >
            <div className='container'>
                <div className='panelNavigation__wrapper'>
                    <a href='#promo' className='panelNavigation__icon'>
                        Naumova Team
                    </a>

                    <div className='panelNavigation__info'>
                        <a
                            href='#program'
                            className='panelNavigation__info-item'
                        >
                            ПРОГРАММА
                        </a>
                        <a
                            href='#courseDescription'
                            className='panelNavigation__info-item'
                        >
                            ЗА ЭТИ 3 НЕДЕЛИ
                        </a>
                        <a
                            href='#advantages'
                            className='panelNavigation__info-item'
                        >
                            ПРЕИМУЩЕСТВА
                        </a>
                        <a
                            href='#portfolio'
                            className='panelNavigation__info-item'
                        >
                            ДО / ПОСЛЕ
                        </a>
                        <a
                            href='#aboutMe'
                            className='panelNavigation__info-item'
                        >
                            ОБО МНЕ
                        </a>
                        <a
                            href='#calorieСalculator'
                            className='panelNavigation__info-item'
                        >
                            РАСЧЕТ КАЛОРИЙ
                        </a>
                    </div>

                    <div
                        className='panelNavigation__hamburger'
                        onClick={() => addActiveStyle()}
                    >
                        <span></span>
                        <span className='long'></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    );
};
