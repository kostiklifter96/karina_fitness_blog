import { useState } from "react";
import { changeStatusSendEmailFromAdmin } from "store/reducer/adminReducer";
import { useAppDispatch } from "store/store";
import { IResponse } from "types/types";

export const useSendEmailFromAdmin = () => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    const dispatch = useAppDispatch();

    const closeModalSendEmailFromAdmin = () => {
        dispatch(changeStatusSendEmailFromAdmin(false));
    };

    const onSubmitSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.currentTarget.reset();

        if (!email || !text) {
            return;
        }

        const dataSendEmail = {
            email: email.toLowerCase().trim(),
            text,
        };

        try {
            setLoading(true);
            const res = await fetch(
                // `${process.env.REACT_APP_BACKEND_PROD}sendEmail?apikey=${process.env.REACT_APP_API_KEY}`,
                `http://localhost:4999/sendEmail?apikey=${process.env.REACT_APP_API_KEY}`,

                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(dataSendEmail),
                },
            );

            const data: IResponse = await res.json();

            if (data.statusSendEmail) {
                closeModalSendEmailFromAdmin();
                alert("Отправлено");
            }
            setLoading(false);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
                alert("Не отправлено");
                setLoading(false);
            }
        }
    };

    return {
        text,
        email,
        loading,
        setText,
        setEmail,
        onSubmitSendEmail,
        closeModalSendEmailFromAdmin,
    };
};
