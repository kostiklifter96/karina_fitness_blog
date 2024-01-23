import { INSTIcon } from "components/clientComponents/svgIcon/INSTIcon";
import { TGIcon } from "components/clientComponents/svgIcon/TGIcon";
import { VKIcon } from "components/clientComponents/svgIcon/VKIcon";
import { PriceIcon } from "../svgIcon/PriceIcon";
import "./promo.scss";

export const Promo = () => {
    return (
        <section className='promo' id='promo'>
            <div className='container'>
                <div className='promo__contacts'>
                    <a
                        href='https://t.me/Naumova_karina'
                        className='promo__contacts-link tg_btn-header'
                        target='blank'
                    >
                        <TGIcon />
                    </a>
                    <a
                        href='https://vk.com/public222068936'
                        target='blank'
                        className='promo__contacts-link vk_btn-header'
                    >
                        <VKIcon />
                    </a>
                    <a
                        href='https://www.instagram.com/naumova_karina/?hl=ru'
                        target='blank'
                        className='promo__contacts-link inst_btn-header'
                    >
                        <INSTIcon />
                    </a>
                </div>

                <div className='promo__title'>ОНЛАЙН-АБОНЕМЕНТ НА 21 ДЕНЬ</div>
                <div className='promo__subtitle'>
                    Каждую неделю 3 новые тренировки по 30 минут, готовый план
                    питания на 3 недели и чат единомышленников
                </div>

                <div className='promo__info'>
                    <div className='promo__info-svg'>
                        <PriceIcon />
                    </div>
                    <div className='promo__info-start'>
                        <div>59 BYN</div>
                        <div>СТАРТ 12.02</div>
                    </div>
                </div>

                <div className='promo__btns'>
                    {/* <a
                        href={linkUrl}
                        target='_blank'
                        className='promo__links-main btn'
                        rel='noreferrer'
                    >
                        Купить доступ за{" "}
                        {String(process.env.REACT_APP_GENERAL_PRICE).substring(
                            0,
                            2,
                        )}{" "}
                        BYN
                    </a>{" "} */}
                    <a
                        href='#program'
                        className='promo__links-main btn'
                        rel='noreferrer'
                    >
                        ПОДРОБНЕЕ
                    </a>
                </div>
            </div>
        </section>
    );
};
