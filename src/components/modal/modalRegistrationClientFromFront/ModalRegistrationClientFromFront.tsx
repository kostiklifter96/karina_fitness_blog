import { CloseIcon } from "components/clientComponents/svgIcon/CloseIcon";
import { useRegistrationClient } from "hooks/useRegistrationClient";
import { InputMask, InputMaskChangeEvent } from "primereact/inputmask";
import { changeStatusRegistationClient } from "store/reducer/adminReducer";
import { useAppDispatch } from "store/store";
import "./modalRegistrationClientFromFront.scss";

export const ModalRegistrationClientFromFront = () => {
    const {
        name,
        email,
        telNumber,
        telegram,
        setName,
        setEmail,
        setTelNumber,
        setTelegram,
        onSubmit,
    } = useRegistrationClient();

    const dispatch = useAppDispatch();
    const originalNumber = process.env.REACT_APP_GENERAL_PRICE!;
    const truncatedNumber = Math.floor(+originalNumber / 100);

    return (
        <div
            className='modalRegistrationClientFromFront'
            onClick={() => dispatch(changeStatusRegistationClient(false))}
        >
            <div
                className='modalRegistrationClientFromFront__section'
                onClick={(e) => e.stopPropagation()}
            >
                <div
                    className='modalRegistrationClientFromFront__closeicon'
                    onClick={() =>
                        dispatch(changeStatusRegistationClient(false))
                    }
                >
                    <CloseIcon />
                </div>
                <div className='modalRegistrationClientFromFront__price'>
                    <h1>Сумма: {truncatedNumber} BYN</h1>{" "}
                </div>

                <div className='modalRegistrationClientFromFront__info'>
                    Оставьте, пожалуйста, свои контактные данные. После успешной
                    оплаты на ваш e-mail будет отправленна ссылка на
                    телеграм-канал со всеми материалами
                </div>
                <form
                    className='modalRegistrationClientFromFront__form'
                    onSubmit={onSubmit}
                >
                    <input
                        type='name'
                        placeholder='Ваше имя'
                        required
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <input
                        type='email'
                        placeholder='Ваш e-mail'
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <InputMask
                        mask='+375(99)999-99-99'
                        placeholder='+375(99)999-99-99'
                        required
                        onChange={(e: InputMaskChangeEvent) =>
                            setTelNumber(`${e.target.value}`)
                        }
                        value={telNumber}
                    ></InputMask>
                    <input
                        type='text'
                        placeholder='Ваш ник в Telegram'
                        onChange={(e) => setTelegram(e.target.value)}
                        value={telegram}
                    />
                    <button>Перейти к оплате</button>
                </form>
                <div className='modalRegistrationClientFromFront__policy'>
                    Нажимая на кнопку <b>"Перейти к оплате"</b> вы соглашаетесь
                    с Политикой обработки персональных данных и Публичной
                    офертой
                </div>
            </div>
        </div>
    );
};
