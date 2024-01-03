import { useState } from "react";
import { IResponse } from "types/types";

export const useDeleteClient = () => {
    const [loading, setLoading] = useState(false);

    const deleteClient = async (id: number) => {
        try {
            setLoading(true);
            const res = await fetch(
                `${process.env.REACT_APP_BACKEND_PROD}deleteClient?apikey=${process.env.REACT_APP_API_KEY}`,
                // `http://localhost:4999/deleteClient?apikey=${process.env.REACT_APP_API_KEY}`,

                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ id }),
                },
            );

            const data: IResponse = await res.json();

            setLoading(false);
            alert(`status: Клиент удалён`);

            return data;
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
                setLoading(false);
                alert("Клиент не удалён из БД");
            }
        }
    };

    return { deleteClient, loading };
};
