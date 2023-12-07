import { useAdminControl } from "hooks/useAdminControl";
import { useAppSelector } from "store/store";
import { ClientListControlBtn } from "./ClientListControlBtn";
import { ClientsList } from "./ClientsList";
import { ClientsListInfo } from "./ClientsListInfo";

export const Clients = () => {
    const { clientList } = useAppSelector((state) => state.client);
    const {
        handleDeleteClient,
        handleGetAllClients,
        logOut,
        handlerModalSendEmail,
        handlerModalCreateClient,
        handlerModalChangeClientForPersonally,
        handlerModalSendEmailForPersonally,
        handlerModalCreatePayment,
        loading,
    } = useAdminControl();

    return (
        <div className='admin'>
            <ClientListControlBtn
                handleGetAllClients={handleGetAllClients}
                handlerModalCreateClient={handlerModalCreateClient}
                handlerModalSendEmail={handlerModalSendEmail}
                logOut={logOut}
            />

            {clientList.length > 0 && (
                <div className='admin-clientList'>
                    <ClientsListInfo />

                    <ClientsList
                        loading={loading}
                        handlerModalChangeClientForPersonally={
                            handlerModalChangeClientForPersonally
                        }
                        handlerModalSendEmailForPersonally={
                            handlerModalSendEmailForPersonally
                        }
                        handlerModalCreatePayment={handlerModalCreatePayment}
                        handleDeleteClient={handleDeleteClient}
                    />
                </div>
            )}
        </div>
    );
};
