import { useEffect, useState } from "react";
import "./panelNavigation.scss";

export const PanelNavigation = () => {
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
                    <div className='title panelNavigation__icon'>
                        Naumova Team
                    </div>

                    <div className='panelNavigation__info'>
                        <div>ОБО МНЕ</div>
                        <div>ПРЕИМУЩЕСТВА</div>
                        <div>ДО / ПОСЛЕ</div>
                    </div>
                </div>
            </div>
        </header>
    );
};
