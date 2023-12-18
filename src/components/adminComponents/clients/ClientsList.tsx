import { useAppSelector } from "store/store";
import { IClientList } from "types/types";
import { ClientsListItem } from "./ClientsListItem";

export const ClientsList = ({
    handlerModalChangeClientForPersonally,
    handlerModalSendEmailForPersonally,
    handleDeleteClient,
    handlerModalCreatePayment,
    loading,
}: IClientList) => {
    const { filterClientList } = useAppSelector((state) => state.client);

    return (
        <>
            {filterClientList.map((el) => (
                <ClientsListItem
                    key={el.id}
                    client={el}
                    handlerModalSendEmailForPersonally={
                        handlerModalSendEmailForPersonally
                    }
                    handlerModalChangeClientForPersonally={
                        handlerModalChangeClientForPersonally
                    }
                    handleDeleteClient={handleDeleteClient}
                    handlerModalCreatePayment={handlerModalCreatePayment}
                    loading={loading}
                />
            ))}
        </>
    );
};
