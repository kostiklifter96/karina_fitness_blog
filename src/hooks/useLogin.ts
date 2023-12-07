import { useState } from "react";
import { changeStatusLogIn } from "store/reducer/adminReducer";
import { useAppDispatch } from "store/store";
import { IResponse } from "types/types";

export const useLogin = () => {
    const dispatch = useAppDispatch();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const loginAdmin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.currentTarget.reset();

        const adminData = {
            login: login.trim(),
            password: password.trim(),
        };

        try {
            const res = await fetch(
                `${process.env.REACT_APP_BACKEND_PROD}login?apikey=${process.env.REACT_APP_API_KEY}`,
                // `http://localhost:4999/login?apikey=${process.env.REACT_APP_API_KEY}`,

                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(adminData),
                },
            );

            const data: IResponse = await res.json();
            localStorage.setItem("logIn", JSON.stringify(data.logIn));

            if (data.logIn) {
                dispatch(changeStatusLogIn(data.logIn));
            }
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
                alert("Ошибка входа");
            }
        }
    };

    return {
        loginAdmin,
        setLogin,
        setPassword,
    };
};
