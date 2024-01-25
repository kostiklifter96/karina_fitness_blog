import { IClientsListItem } from "types/types";

export const ClientsListItem = ({
    handlerModalChangeClientForPersonally,
    handlerModalSendEmailForPersonally,
    handleDeleteClient,
    handlerModalCreatePayment,
    client,
    loading,
}: IClientsListItem) => {
    const handleConfirmDelete = () => {
        if (window.confirm("Подтвердить удаление")) {
            handleDeleteClient(client.id);
        }
        return;
    };

    return (
        <>
            <div className='admin-clientList__item'>
                <div className='admin-clientList__item-clientInfo'>
                    <div>
                        <span>id: </span>
                        {client.id}
                    </div>
                    <div>
                        <span>name: </span>
                        {client.name}
                    </div>
                    <div>
                        <span>email: </span> {client.email}
                    </div>
                    <div>
                        <span>number: </span>
                        {client.telNumber}
                    </div>
                    <div>
                        <span>telegram: </span>
                        {client.telegram}
                    </div>
                    <div>
                        <span>textarea: </span>
                        {client.textarea}
                    </div>
                    <div>
                        <span>UID: </span>
                        {client.uid}
                    </div>
                    <div>
                        <span>amount: </span>
                        {client.amount}
                    </div>
                    <div>
                        <span>stream: </span>
                        {client.stream}
                    </div>
                    <div>
                        <span>paymentStatus: </span>
                        {client.paymentStatus}
                    </div>
                    <div>
                        <span>token: </span>
                        {client.paymentToken}
                    </div>
                </div>
                <div className='admin-clientList__item-buttons'>
                    <button
                        className='admin-clientList__item-buttons'
                        onClick={() =>
                            handlerModalChangeClientForPersonally(client)
                        }
                    >
                        Изменить
                    </button>
                    <button
                        className='admin-clientList__item-buttons'
                        onClick={() =>
                            handlerModalSendEmailForPersonally(client.email)
                        }
                    >
                        Отправить письмо
                    </button>
                    <button
                        className='admin-clientList__item-buttons'
                        onClick={() => handlerModalCreatePayment(client.email)}
                    >
                        Создать платеж
                    </button>

                    <button
                        disabled={loading}
                        className='admin-clientList__item-buttons'
                        onClick={handleConfirmDelete}
                    >
                        Удалить
                    </button>
                </div>
            </div>
        </>
    );
};
