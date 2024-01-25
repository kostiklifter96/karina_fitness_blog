import { IFormForChangeOrCreate } from "types/types";

export const RequiredFormChangeOrCreate = ({
    submitFunc,
    loading,
    clientInfo,
    setEmail,
    setName,
    setTextarea,
    setUID,
    setAmount,
    setPaymentStatus,
    setTextForMailer,
    setStream,
    setTelNumber,
    setPaymentToken,
    setTelegram,
}: IFormForChangeOrCreate) => {
    let styleStr = "addClient__form";

    if (clientInfo) {
        styleStr += " change";
    }

    return (
        <form onSubmit={(e) => submitFunc(e)} className={styleStr}>
            <input
                type='email'
                placeholder='Емейл'
                required
                disabled={loading}
                onChange={(e) => setEmail(e.target.value)}
                defaultValue={clientInfo?.email}
                className='addClient__form-input'
            />
            <input
                type='text'
                placeholder='Имя'
                required
                disabled={loading}
                onChange={(e) => setName(e.target.value)}
                defaultValue={clientInfo?.name}
                className='addClient__form-input'
            />
            <input
                type='text'
                placeholder='Номер телефона'
                required
                disabled={loading}
                onChange={(e) => setTelNumber(e.target.value)}
                defaultValue={clientInfo?.telNumber}
                className='addClient__form-input'
            />
            <input
                type='text'
                placeholder='Ник в телеграм'
                required
                disabled={loading}
                onChange={(e) => setTelegram(e.target.value)}
                defaultValue={clientInfo?.telegram}
                className='addClient__form-input'
            />
            <textarea
                placeholder='Textarea'
                required
                disabled={loading}
                onChange={(e) => setTextarea(e.target.value)}
                defaultValue={clientInfo?.textarea}
                className='addClient__form-input'
            />
            <input
                type='text'
                placeholder='UID'
                required
                disabled={loading}
                onChange={(e) => setUID(e.target.value)}
                defaultValue={clientInfo?.uid}
                className='addClient__form-input'
            />
            <input
                type='number'
                placeholder='Цена'
                required
                disabled={loading}
                onChange={(e) => setAmount(+e.target.value)}
                defaultValue={clientInfo?.amount}
                className='addClient__form-input'
            />{" "}
            <input
                type='number'
                placeholder='Поток'
                required
                disabled={loading}
                onChange={(e) => setStream(+e.target.value)}
                defaultValue={clientInfo?.stream}
                className='addClient__form-input'
            />{" "}
            <input
                type='number'
                placeholder='Статус оплаты: 0 - не оплачено'
                required
                disabled={loading}
                onChange={(e) => setPaymentStatus(+e.target.value)}
                defaultValue={clientInfo?.paymentStatus}
                className='addClient__form-input'
            />
            <input
                type='text'
                placeholder='Токен'
                required
                disabled={loading}
                onChange={(e) => setPaymentToken(e.target.value)}
                defaultValue={clientInfo?.paymentToken}
                className='addClient__form-input'
            />
            {setTextForMailer !== undefined && (
                <textarea
                    placeholder='Текст сообщения для отправки'
                    required
                    disabled={loading}
                    onChange={(e) => setTextForMailer(e.target.value)}
                    className='addClient__form-input'
                />
            )}
            <button disabled={loading}>
                {clientInfo ? "Изменить" : "Создать"}
            </button>
        </form>
    );
};
