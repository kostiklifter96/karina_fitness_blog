import { useState } from "react";
import {
    changeStatusCreatePayment,
    changeStatusSendEmailFromAdmin,
} from "store/reducer/adminReducer";
import { createPersonalPaymentUrl } from "store/reducer/clientReducer";
import { useAppDispatch } from "store/store";
import { getPaymentURL } from "utils/getPaymentURL";
import "./modalCreatePaymentUrl.scss";

export const ModalCreatePaymentUrl = () => {
    const [linkUrl, setLinkUrl] = useState<string>("");
    const [newPrice, setNewPrice] = useState<number>(0);
    const dispatch = useAppDispatch();

    const onSubmitСreatePayment = async (
        e: React.FormEvent<HTMLFormElement>,
    ) => {
        e.preventDefault();
        if (!linkUrl) {
            setLinkUrl(await getPaymentURL(newPrice));
            return;
        } else {
            dispatch(changeStatusCreatePayment(false));
            dispatch(changeStatusSendEmailFromAdmin(true));
            dispatch(createPersonalPaymentUrl(linkUrl));
        }
    };

    const closeModalCreatePayment = () => {
        dispatch(changeStatusCreatePayment(false));
    };

    return (
        <>
            <div
                className='modalCreatePaymentUrl'
                onClick={closeModalCreatePayment}
            >
                <div
                    className='modalCreatePaymentUrl__section'
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className='modalCreatePaymentUrl__section-title'>
                        Создать платеж для клиента
                    </div>

                    <form
                        className='modalCreatePaymentUrl__form'
                        onSubmit={onSubmitСreatePayment}
                    >
                        {linkUrl ? (
                            <>
                                <input
                                    type='text'
                                    placeholder='полученная ссылка'
                                    value={linkUrl || ""}
                                    onChange={(e) => setLinkUrl(e.target.value)}
                                    className='modalCreatePaymentUrl__form-input'
                                />
                                <button>Отправить на почту</button>
                            </>
                        ) : (
                            <>
                                <input
                                    type='number'
                                    placeholder='введите сумму в копейках'
                                    required
                                    onChange={(e) =>
                                        setNewPrice(+e.target.value)
                                    }
                                    className='modalCreatePaymentUrl__form-input'
                                />
                                <button>Создать</button>
                            </>
                        )}
                    </form>
                </div>
            </div>
        </>
    );
};
