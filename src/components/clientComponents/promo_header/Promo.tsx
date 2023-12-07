import { INSTIcon } from "components/clientComponents/svgIcon/INSTIcon";
import { TGIcon } from "components/clientComponents/svgIcon/TGIcon";
import { VKIcon } from "components/clientComponents/svgIcon/VKIcon";
import { useEffect, useState } from "react";
import { IPromoHeader } from "types/types";
import { getPaymentURL } from "utils/getPaymentURL";
import { PromoHelper } from "./PromoHelper";
import "./promo.scss";

export const Promo = ({ addActiveStyle }: IPromoHeader) => {
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
        <section className='promo'>
            <div className='hamburger' onClick={() => addActiveStyle()}>
                <span></span>
                <span className='long'></span>
                <span></span>
            </div>

            <PromoHelper />

            <div className='container'>
                <div className='promo__contacts'>
                    <a
                        href='https://t.me/KarinaNaumova'
                        className='promo__contacts-link'
                        target='blank'
                    >
                        <TGIcon />
                    </a>
                    <a
                        href='https://vk.com/public222068936'
                        target='blank'
                        className='promo__contacts-link'
                    >
                        <VKIcon />
                    </a>
                    <a
                        href='https://www.instagram.com/naumova_karina/?hl=ru'
                        target='blank'
                        className='promo__contacts-link'
                    >
                        <INSTIcon />
                    </a>
                </div>
                <div className='title title__fz16 promo__subtitle'>
                    11.12 - 24.12
                </div>
                <h1 className='title title__fz48 promo__title'>Naumova_team</h1>

                <div className='promo__btns'>
                    <a
                        href={linkUrl}
                        target='_blank'
                        className='promo__links-main btn'
                        rel='noreferrer'
                    >
                        Присоединиться за{" "}
                        {String(process.env.REACT_APP_GENERAL_PRICE).substring(
                            0,
                            2,
                        )}{" "}
                        BYN
                    </a>

                    {/* <a href='#about' className='promo__links'>
                        Обо мне
                    </a> */}
                </div>
            </div>
        </section>
    );
};
