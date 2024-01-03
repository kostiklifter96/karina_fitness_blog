import { useState } from "react";
import { FormFields, ISendForm } from "types/types";

export const useSendForm = () => {
    const [loading, setLoading] = useState(false);
    const [modalActiv, setModalActiv] = useState(false);
    const [textModal, setTextModal] = useState("");

    const sendEmail: React.FormEventHandler<HTMLFormElement> = async (
        e: React.FormEvent<HTMLFormElement & FormFields>,
    ) => {
        e.preventDefault();
        sendForm({ e, setLoading, setTextModal, setModalActiv });

        e.currentTarget.reset();
    };

    const sendForm = async ({
        e,
        setLoading,
        setTextModal,
        setModalActiv,
    }: ISendForm) => {
        setLoading(true);

        const sendInfo = {
            name: e.currentTarget.name?.value,
            email: e.currentTarget.email?.value.toLowerCase().trim(),
            textarea: e.currentTarget.textarea?.value,
        };

        console.log(sendInfo);

        try {
            await fetch(
                `${process.env.REACT_APP_BACKEND_PROD}register?apikey=${process.env.REACT_APP_API_KEY}`,
                // `http://localhost:4999/register?apikey=${process.env.REACT_APP_API_KEY}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(sendInfo),
                },
            );

            setLoading(false);
            setTextModal("Сообщение отправленно");
            setModalActiv(true);
            setTimeout(() => {
                setModalActiv(false);
                setTextModal("");
            }, 1000);
        } catch (er) {
            setLoading(false);
            setTextModal("Сообщение не отправленно");
            setModalActiv(true);
            setTimeout(() => {
                setModalActiv(false);
                setTextModal("");
            }, 1000);
        }
    };

    return {
        modalActiv,
        setModalActiv,
        textModal,
        sendEmail,
        loading,
    };
};
