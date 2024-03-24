import { CloseIcon } from "components/clientComponents/svgIcon/CloseIcon";
import { usePromoCodeActivation } from "hooks/usePromoCodeActivation";
import { useRegistrationClient } from "hooks/useRegistrationClient";
import { useEffect, useState } from "react";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import { changeStatusRegistationClient } from "store/reducer/adminReducer";
import { getCurrentPrice } from "store/reducer/clientReducer";
import { useAppDispatch, useAppSelector } from "store/store";
import { ErrorMessage } from "types/types";
import "./modalRegistrationClientFromFront.scss";

export const ModalRegistrationClientFromFront = () => {
    const dispatch = useAppDispatch();
    const currentPrice = useAppSelector((state) => state.client.currentPrice);
    const [truncatedNumber, setTruncatedNumber] = useState(currentPrice);

    const {
        promoCode,
        loadingPromoCode,
        onClickPromo,
        setEmailForPromo,
        setPromoCode,
        couponError,
    } = usePromoCodeActivation();

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

    const handleCloseWindow = () => {
        if (loading) {
            dispatch(changeStatusRegistationClient(true));
        } else {
            dispatch(changeStatusRegistationClient(false));
            dispatch(getCurrentPrice(6500));
        }
    };

    useEffect(() => {
        setTruncatedNumber(currentPrice);
    }, [currentPrice]);

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
                    <h1>Сумма: {truncatedNumber / 100} BYN</h1>{" "}
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
                        onBlur={(e) => setEmailForPromo(e.target.value)}
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
                        format={false}
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

                    <div className='modalRegistrationClientFromFront__form-item promocode'>
                        <label
                            style={{ display: !couponError ? "none" : "block" }}
                        >
                            {couponError === ErrorMessage.clientOrCode &&
                                "Неверные данные"}
                            {couponError === ErrorMessage.requiredField &&
                                "Введите email и промокод"}
                        </label>
                        <input
                            type='text'
                            placeholder='Промокод'
                            onChange={(e) => setPromoCode(e.target.value)}
                            value={promoCode}
                            className='modalRegistrationClientFromFront__form-item'
                        />

                        <div
                            onClick={() => onClickPromo()}
                            style={{
                                pointerEvents: loadingPromoCode
                                    ? "none"
                                    : "auto",
                            }}
                        >
                            {loadingPromoCode
                                ? "Идет проверка..."
                                : "Применить"}
                        </div>
                    </div>

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
