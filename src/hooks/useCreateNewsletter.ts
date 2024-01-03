import { useState } from "react";
import { changeStatusCreateNewsletter } from "store/reducer/adminReducer";
import { useAppDispatch } from "store/store";

export const useCreateNewsletter = () => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [threads, setThreads] = useState<number>(-1);
    const [loading, setLoading] = useState(false);

    const dispatch = useAppDispatch();

    const closeModalCreateNewsletter = () => {
        dispatch(changeStatusCreateNewsletter(false));
    };

    const onSubmitSendNewsletter = async (
        e: React.FormEvent<HTMLFormElement>,
    ) => {
        e.preventDefault();
        e.currentTarget.reset();

        if (!title || !text || !threads) {
            return;
        }

        const dataSendNewsletter = {
            title,
            text,
            threads,
        };

        console.log(dataSendNewsletter);

        try {
            setLoading(true);
            const res = await fetch(
                `${process.env.REACT_APP_BACKEND_PROD}sendNewsLetter?apikey=${process.env.REACT_APP_API_KEY}`,
                // `http://localhost:4999/sendNewsLetter?apikey=${process.env.REACT_APP_API_KEY}`,

                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(dataSendNewsletter),
                },
            );

            const data = await res.json();

            if (data.statusSendEmail) {
                closeModalCreateNewsletter();
                alert("Отправлено");
            }

            setLoading(false);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
                alert("Не отправлено");
                setLoading(false);
            }
            closeModalCreateNewsletter();
        }
    };

    return {
        onSubmitSendNewsletter,
        closeModalCreateNewsletter,
        loading,
        setText,
        setTitle,
        setThreads,
    };
};
