import React, { useState } from "react";
import { changeStatusCreateClient } from "store/reducer/adminReducer";
import {
    addClientFromFront,
    updateClientFromFront,
} from "store/reducer/clientReducer";
import { useAppDispatch } from "store/store";
import { ICreateClient } from "types/types";

export const useCreateOrChangeClient = () => {
    const [loading, setLoading] = useState(false);
    const [clientId, setClientId] = useState<number>();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [textarea, setTextarea] = useState("");
    const [uid, setUID] = useState("");
    const [amount, setAmount] = useState<number>(0);
    const [stream, setStream] = useState<number>(0);
    const [paymentStatus, setPaymentStatus] = useState<number>(0);
    const [textForMailer, setTextForMailer] = useState("");

    const dispatch = useAppDispatch();

    const closeModalCreateOrChangeClient = () => {
        dispatch(changeStatusCreateClient(false));
    };

    const createClient = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.currentTarget.reset();

        if (
            email ||
            textarea ||
            uid ||
            amount ||
            paymentStatus ||
            name ||
            stream ||
            textForMailer
        ) {
            const dataCreateClient: ICreateClient = {
                email: email.toLowerCase().trim(),
                name,
                textarea,
                uid,
                amount,
                stream,
                paymentStatus,
                textForMailer,
            };

            try {
                setLoading(true);
                const res = await fetch(
                    `${process.env.REACT_APP_BACKEND_PROD}createClient?apikey=${process.env.REACT_APP_API_KEY}`,
                    // `http://localhost:4999/createClient?apikey=${process.env.REACT_APP_API_KEY}`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(dataCreateClient),
                    },
                );

                const data = await res.json();

                if (data.statusSendEmail) {
                    // closeModalCreateOrChangeClient();

                    setLoading(false);
                    closeModalCreateOrChangeClient();
                    dispatch(addClientFromFront(data.result));
                    alert("Добавлен новый клиент");
                }

                if (!data.statusSendEmail) {
                    closeModalCreateOrChangeClient();
                    setLoading(false);
                    alert(
                        "Ошибка отправки сообщения клиенту. Клиент не добавлен",
                    );
                }
            } catch (error) {
                if (error instanceof Error) {
                    console.log(error.message);
                    alert("Ошибка добавления нового клиента");

                    setLoading(false);
                }
            }
        } else {
            alert("Не хватает данных из формы");
            return;
        }
    };

    const updateClient = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.currentTarget.reset();

        if (
            email ||
            textarea ||
            uid ||
            amount ||
            paymentStatus ||
            name ||
            stream ||
            clientId
        ) {
            const dataChangeClient = {
                id: clientId,
                email: email.toLowerCase().trim(),
                name,
                textarea,
                uid,
                stream,
                amount,
                paymentStatus,
            };

            try {
                setLoading(true);
                const res = await fetch(
                    `${process.env.REACT_APP_BACKEND_PROD}updateClient?apikey=${process.env.REACT_APP_API_KEY}`,
                    // `http://localhost:4999/updateClient?apikey=${process.env.REACT_APP_API_KEY}`,

                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(dataChangeClient),
                    },
                );

                const data = await res.json();

                if (data.statusSendEmail) {
                    closeModalCreateOrChangeClient();
                    dispatch(updateClientFromFront(dataChangeClient));
                }

                setTimeout(() => {
                    setLoading(false);
                    closeModalCreateOrChangeClient();
                }, 3000);
            } catch (error) {
                if (error instanceof Error) {
                    console.log(error.message);
                    setLoading(false);
                }
            }
        } else {
            alert("Не хватает данных из формы");
            return;
        }
    };

    return {
        email,
        name,
        textarea,
        uid,
        stream,
        amount,
        paymentStatus,
        loading,
        clientId,
        setClientId,
        setTextarea,
        setEmail,
        setName,
        setStream,
        setAmount,
        setUID,
        setPaymentStatus,
        setTextForMailer,
        createClient,
        updateClient,
        closeModalCreateOrChangeClient,
    };
};
