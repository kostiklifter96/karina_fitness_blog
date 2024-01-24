import React, { useState } from "react";
import { changeStatusRegistationClient } from "store/reducer/adminReducer";
import { useAppDispatch } from "store/store";
import { getPaymentURL } from "utils/getPaymentURL";

export const useRegistrationClient = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [telNumber, setTelNumber] = useState("");
    const [telegram, setTelegram] = useState("");
    const dispatch = useAppDispatch();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

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

        // console.log(clientInfoData);

        if (
            clientInfoData.email ||
            clientInfoData.name ||
            clientInfoData.paymentToken ||
            clientInfoData.telNumber ||
            clientInfoData.telegram
        ) {
            try {
                console.log(clientInfoData);

                const responce = await fetch(
                    `http://localhost:4999/registration?apikey=${process.env.REACT_APP_API_KEY}`,
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
                }

                if (!data.statusSendEmail) {
                    alert("Ошибка регистрации. Попробуйте еще раз");
                }
            } catch (error) {
                if (error instanceof Error) {
                    alert("Ошибка регистрации. Попробуйте еще раз");
                }
            }
        } else {
            alert("Не хватает данных из формы");
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
    };
};
