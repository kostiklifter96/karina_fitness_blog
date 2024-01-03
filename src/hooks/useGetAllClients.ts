import { useState } from "react";
import { getAllClientsFromDataBase } from "store/reducer/clientReducer";
import { useAppDispatch } from "store/store";
import { IResponse } from "types/types";

export const useGetAllClients = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();

    const getAllClients = async () => {
        try {
            setLoading(true);
            const res = await fetch(
                `${process.env.REACT_APP_BACKEND_PROD}getAllClients?apikey=${process.env.REACT_APP_API_KEY}`,
                // `http://localhost:4999/getAllClients?apikey=${process.env.REACT_APP_API_KEY}`,
            );

            const data: IResponse = await res.json();

            dispatch(getAllClientsFromDataBase(data.result));

            setLoading(false);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
                setLoading(false);
            }
        }
    };

    return { getAllClients, loading };
};
