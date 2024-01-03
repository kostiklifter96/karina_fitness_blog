import { IClientListControlBtn } from "types/types";

export const ClientListControlBtn = ({
    logOut,
    handleGetAllClients,
    handlerModalCreateClient,
    handlerModalSendEmail,
    handlerModalCreateNewsletter,
}: IClientListControlBtn) => {
    return (
        <>
            <div className='admin-head'>
                <div className='admin-head__logo'>AdminPanel</div>
                <div className='admin-head__exit' onClick={logOut}>
                    Выход
                </div>
            </div>

            <div className='admin-control'>
                <div
                    className='admin-control__btnControl'
                    onClick={handleGetAllClients}
                >
                    Показать всех участников
                </div>
                <div
                    className='admin-control__btnControl'
                    onClick={handlerModalCreateClient}
                >
                    Добавить участника
                </div>
                <div
                    className='admin-control__btnControl'
                    onClick={handlerModalSendEmail}
                >
                    Отправить письмо
                </div>
                <div
                    className='admin-control__btnControl'
                    onClick={handlerModalCreateNewsletter}
                >
                    Рассылка
                </div>
            </div>
        </>
    );
};
