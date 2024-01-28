import React, { useState } from "react";
import { changeStatusRegistationClient } from "store/reducer/adminReducer";
import { useAppDispatch } from "store/store";
import { getPaymentURL } from "utils/getPaymentURL";

export const useRegistrationClient = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [telNumber, setTelNumber] = useState("");
    const [telegram, setTelegram] = useState("");
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);
        const res: {
            token: string;
            redirect_url: string;
        } = await getPaymentURL();

        const clientInfoData = {
            name,
            email,
            telNumber: telNumber.replace(/[\(\)\-]/g, ""),
            telegram,
            paymentToken: res.token,
        };

        if (
            clientInfoData.email &&
            clientInfoData.name &&
            clientInfoData.paymentToken &&
            clientInfoData.telNumber
        ) {
            console.log(true);

            try {
                const responce = await fetch(
                    `${process.env.REACT_APP_BACKEND_PROD}registration?apikey=${process.env.REACT_APP_API_KEY}`,
                    // `http://localhost:4999/registration?apikey=${process.env.REACT_APP_API_KEY}`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(clientInfoData),
                    },
                );
                const data = await responce.json();
                if (data.statusSendEmail) {
                    if (res.redirect_url) {
                        window.location.href = res.redirect_url;
                    }
                    setLoading(false);
                }
                if (!data.statusSendEmail) {
                    setLoading(false);
                    alert("Ошибка регистрации. Попробуйте еще раз");
                }
            } catch (error) {
                if (error instanceof Error) {
                    alert("Ошибка регистрации. Попробуйте еще раз");
                }
                setLoading(false);
            }
        } else {
            alert("Не хватает данных из формы");
            setLoading(false);
        }

        dispatch(changeStatusRegistationClient(false));
    };

    return {
        name,
        email,
        telNumber,
        telegram,
        setName,
        setEmail,
        setTelNumber,
        setTelegram,
        onSubmit,
        loading,
    };
};
