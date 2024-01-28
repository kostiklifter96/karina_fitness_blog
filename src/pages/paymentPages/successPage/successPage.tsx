import { Footer } from "components";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./successPage.scss";

export const SuccessPage = () => {
    const navigation = useNavigate();
    const location = useLocation();

    const sendTokenAndStatus = async ({
        token,
        status,
    }: {
        token: string;
        status: string;
    }) => {
        if (token && status) {
            try {
                const response = await fetch(
                    `${process.env.REACT_APP_BACKEND_PROD}controlPayment?apikey=${process.env.REACT_APP_API_KEY}`,
                    // `http://localhost:4999/controlPayment?apikey=${process.env.REACT_APP_API_KEY}`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ token, status }),
                    },
                );
                return response.json();
            } catch (error) {
                if (error instanceof Error) {
                    alert(
                        "Ошибка регистрации!!! Напишите на почту naumova_team@mail.ru",
                    );
                }
            }
        }

        return;
    };

    useEffect(() => {
        // Получаем параметры из адресной строки
        const queryParams = new URLSearchParams(location.search);
        const token = queryParams.get("token");
        const status = queryParams.get("status");
        console.log(token);
        console.log(status);

        if (typeof token === "string" && typeof status === "string") {
            if (token && status) {
                sendTokenAndStatus({
                    token,
                    status,
                });
            }
        }
    }, [location.search]);

    return (
        <>
            <div className='successPage'>
                <header>
                    <button onClick={() => navigation("/")}>
                        Вернуться на главную
                    </button>
                </header>
                <div className='successPage__info'>
                    <div className='successPage__info-result'>
                        <p>ДОБРО ПОЖАЛОВАТЬ В NAUMOVA TEAM!</p>
                    </div>
                    <div>
                        <div className='successPage__info-instructions'>
                            Вам на электронную почту отправлено письмо с
                            пригласительной ссылкой. Пройдите по ней, чтобы
                            вступить в общий телеграм-чат.
                        </div>
                        <div className='successPage__info-instructions'>
                            В случае возникновения вопросов, просьба написать на{" "}
                            {
                                <a href='mailto:naumova_team@mail.ru'>
                                    naumova_team@mail.ru
                                </a>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
