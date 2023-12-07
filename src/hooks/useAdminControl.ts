import {
    changeStatusCreateClient,
    changeStatusCreatePayment,
    changeStatusLogIn,
    changeStatusSendEmailFromAdmin,
} from "store/reducer/adminReducer";
import {
    deleteClientFromFront,
    getClientEmailFromList,
    getClientFullInfoFromList,
} from "store/reducer/clientReducer";
import { useAppDispatch } from "store/store";
import { IClient } from "types/types";
import { useDeleteClient } from "./useDeleteClient";
import { useGetAllClients } from "./useGetAllClients";

export const useAdminControl = () => {
    const dispatch = useAppDispatch();
    const { getAllClients } = useGetAllClients();
    const { deleteClient, loading } = useDeleteClient();

    const handlerModalSendEmail = () => {
        dispatch(getClientEmailFromList(""));
        dispatch(changeStatusSendEmailFromAdmin(true));
    };

    const handlerModalSendEmailForPersonally = (perEmail: string) => {
        dispatch(changeStatusSendEmailFromAdmin(true));
        dispatch(getClientEmailFromList(perEmail));
    };

    const handlerModalCreateClient = () => {
        dispatch(changeStatusCreateClient(true));
        dispatch(getClientFullInfoFromList(null));
    };

    const handlerModalChangeClientForPersonally = (info: IClient) => {
        dispatch(changeStatusCreateClient(true));
        dispatch(getClientFullInfoFromList(info));
    };

    const handlerModalCreatePayment = (perEmail: string) => {
        dispatch(changeStatusCreatePayment(true));
        dispatch(getClientEmailFromList(perEmail));
    };

    const logOut = () => {
        dispatch(changeStatusLogIn(false));
        localStorage.clear();
    };

    const handleGetAllClients = () => {
        getAllClients();
    };

    const handleDeleteClient = (id: number) => {
        dispatch(deleteClientFromFront(id));
        deleteClient(id);
    };

    return {
        handleDeleteClient,
        handleGetAllClients,
        logOut,
        handlerModalChangeClientForPersonally,
        handlerModalSendEmailForPersonally,
        handlerModalCreatePayment,
        handlerModalSendEmail,
        handlerModalCreateClient,
        loading,
    };
};
