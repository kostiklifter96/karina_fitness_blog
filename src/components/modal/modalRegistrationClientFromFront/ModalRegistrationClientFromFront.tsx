import { CloseIcon } from "components/clientComponents/svgIcon/CloseIcon";
import { useRegistrationClient } from "hooks/useRegistrationClient";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
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
        loading,
    } = useRegistrationClient();

    const dispatch = useAppDispatch();
    const originalNumber = process.env.REACT_APP_GENERAL_PRICE!;
    const truncatedNumber = Math.floor(+originalNumber / 100);

    const handleCloseWindow = () => {
        if (loading) {
            dispatch(changeStatusRegistationClient(true));
        } else {
            dispatch(changeStatusRegistationClient(false));
        }
    };

    return (
        <div
            className='modalRegistrationClientFromFront'
            onClick={handleCloseWindow}
        >
            <div
                className='modalRegistrationClientFromFront__section'
                onClick={(e) => e.stopPropagation()}
            >
                <div
                    className='modalRegistrationClientFromFront__closeicon'
                    onClick={handleCloseWindow}
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
                        disabled={loading}
                        className='modalRegistrationClientFromFront__form-item'
                    />
                    <input
                        type='email'
                        placeholder='Ваш e-mail'
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        disabled={loading}
                        className='modalRegistrationClientFromFront__form-item'
                    />

                    <IntlTelInput
                        containerClassName='intl-tel-input iti'
                        inputClassName='form-control'
                        value={telNumber}
                        defaultCountry='by'
                        useMobileFullscreenDropdown={false}
                        format={false} // Отключаем внутренний форматировщик
                        onPhoneNumberChange={(
                            isValid,
                            newNumber,
                            countryData,
                        ) => setTelNumber(newNumber)}
                        nationalMode={false}
                        disabled={loading}
                    />

                    <input
                        type='text'
                        placeholder='Ваш ник в Telegram - необязательное поле'
                        onChange={(e) => setTelegram(e.target.value)}
                        value={telegram}
                        disabled={loading}
                        className='modalRegistrationClientFromFront__form-item'
                    />
                    <button disabled={loading}>
                        {loading ? "Идет загрузка..." : "Перейти к оплате"}
                    </button>
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
