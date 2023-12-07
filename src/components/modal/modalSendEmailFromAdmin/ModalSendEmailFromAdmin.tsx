import { useSendEmailFromAdmin } from "hooks/useSendEmailFromAdmin";
import { useEffect } from "react";
import { useAppSelector } from "store/store";
import "./modalSendEmailFromAdmin.scss";

export const ModalSendEmailFromAdmin = () => {
    const { clientEmailFromList, personalPaymentUrl } = useAppSelector(
        (state) => state.client,
    );
    const {
        loading,
        setText,
        setEmail,
        closeModalSendEmailFromAdmin,
        onSubmitSendEmail,
    } = useSendEmailFromAdmin();

    useEffect(() => {
        if (clientEmailFromList) {
            setEmail(clientEmailFromList);
        }

        if (personalPaymentUrl) {
            setText(personalPaymentUrl);
        }
    }, [clientEmailFromList, personalPaymentUrl, setEmail, setText]);

    return (
        <>
            <div
                className='emailFromAdmin'
                onClick={closeModalSendEmailFromAdmin}
            >
                <div
                    className='emailFromAdmin__section'
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className='emailFromAdmin__section-title'>
                        Отправить письмо
                    </div>
                    <form
                        onSubmit={onSubmitSendEmail}
                        className='emailFromAdmin__form'
                    >
                        {clientEmailFromList ? (
                            <input
                                type='email'
                                placeholder='Емейл'
                                required
                                className='emailFromAdmin__form-input'
                                onChange={(e) => setEmail(e.target.value)}
                                defaultValue={clientEmailFromList}
                            />
                        ) : (
                            <input
                                type='email'
                                placeholder='Емейл'
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                className='emailFromAdmin__form-input'
                            />
                        )}

                        {personalPaymentUrl ? (
                            <textarea
                                placeholder='Сообщение'
                                required
                                onChange={(e) => setText(e.target.value)}
                                className='emailFromAdmin__form-input'
                                defaultValue={personalPaymentUrl}
                            />
                        ) : (
                            <textarea
                                placeholder='Сообщение'
                                required
                                onChange={(e) => setText(e.target.value)}
                                className='emailFromAdmin__form-input'
                            />
                        )}

                        <button
                            disabled={loading}
                            style={{
                                display: `${loading && "none"}`,
                            }}
                        >
                            Отправить
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};
