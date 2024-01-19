import { INSTIcon } from "components/clientComponents/svgIcon/INSTIcon";
import { TGIcon } from "components/clientComponents/svgIcon/TGIcon";
import { VKIcon } from "components/clientComponents/svgIcon/VKIcon";
import "./aside.scss";

export const Aside = () => {
    return (
        <aside className='sidepanel'>
            <a
                href='https://t.me/Naumova_karina'
                className='sidepanel__link tg_btn-aside'
                target='blank'
            >
                <TGIcon />
            </a>
            <a
                href='https://vk.com/public222068936'
                className='sidepanel__link vk_btn-aside'
                target='blank'
            >
                <VKIcon />
            </a>

            <a
                href='https://www.instagram.com/naumova_karina/?hl=ru'
                target='blank'
                className='sidepanel__link inst_btn-aside'
            >
                <INSTIcon />
            </a>
            <div className='sidepanel__divider'></div>
            <div className='sidepanel__text'>
                <span>Социальные сети</span>
            </div>
        </aside>
    );
};
