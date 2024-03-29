import {
    Clients,
    ModalAddOrChangeClient,
    ModalCreateNewsletter,
    ModalCreatePaymentUrl,
    ModalSendEmailFromAdmin,
} from "components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "store/store";
import "./adminPage.scss";

export const AdminPage = () => {
    const navigator = useNavigate();

    const {
        statusLogIn,
        statusSendEmailFromAdmin,
        statusCreateClient,
        statusCreatePayment,
        statusCreateNewsletter,
    } = useAppSelector((state) => state.admin);

    useEffect(() => {
        if (!statusLogIn) {
            navigator("/login");
        }
    }, [navigator, statusLogIn]);

    return (
        <>
            {statusCreatePayment && <ModalCreatePaymentUrl />}
            {statusCreateClient && <ModalAddOrChangeClient />}
            {statusCreateNewsletter && <ModalCreateNewsletter />}

            {statusSendEmailFromAdmin && <ModalSendEmailFromAdmin />}

            <Clients />
        </>
    );
};
