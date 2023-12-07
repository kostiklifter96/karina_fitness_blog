import { createSlice } from "@reduxjs/toolkit";
import { IClient } from "types/types";

interface IInitialStateAdmin {
    clientList: IClient[];
    filterClientList: IClient[];
    clientFullInfoFromList: IClient | null;
    clientEmailFromList: string;
    personalPaymentUrl: string;
    sortByTime: string;
    numberOfThreads: number[];
}

const initialState: IInitialStateAdmin = {
    clientList: [],
    filterClientList: [],
    sortByTime: "old",
    clientFullInfoFromList: null,
    clientEmailFromList: "",
    personalPaymentUrl: "",
    numberOfThreads: [],
};

export const clientReducer = createSlice({
    name: "CLIENT",
    initialState,
    reducers: {
        getAllClientsFromDataBase: (state, action) => {
            state.clientList = action.payload;
        },

        filterClientListByThreads: (state, action) => {
            if (action.payload === -1) {
                state.filterClientList = [...state.clientList];
                return;
            }
            state.filterClientList = [...state.clientList].filter(
                (el) => el.stream === action.payload,
            );
        },

        filterClientListByTimeType: (state, action) => {
            state.sortByTime = action.payload;
        },

        getClientFullInfoFromList: (state, action) => {
            state.clientFullInfoFromList = action.payload;
        },

        getClientEmailFromList: (state, action) => {
            state.clientEmailFromList = action.payload;
        },

        createPersonalPaymentUrl: (state, action) => {
            state.personalPaymentUrl = action.payload;
        },

        loadAllClients: (state, action) => {
            state.clientList = action.payload;
        },

        getNumberOfThreads: (state, action) => {
            const threads: number[] = [];
            state.clientList.forEach((el) => {
                threads.push(el.stream);
            });
            state.numberOfThreads = [...new Set(threads)];
        },

        addClientFromFront: (state, action) => {
            // state.clientList.push(action.payload);
            state.filterClientList.push(action.payload);
        },

        deleteClientFromFront: (state, action) => {
            state.filterClientList = state.clientList.filter(
                (el) => el.id !== action.payload,
            );
            state.clientList = state.clientList.filter(
                (el) => el.id !== action.payload,
            );
        },

        updateClientFromFront: (state, action) => {
            state.filterClientList.splice(
                state.filterClientList.findIndex(
                    (el) => el.id === action.payload.id,
                ),
                1,
                action.payload,
            );
        },
    },
});

export const {
    getAllClientsFromDataBase,
    getClientFullInfoFromList,
    getClientEmailFromList,
    createPersonalPaymentUrl,
    addClientFromFront,
    deleteClientFromFront,
    loadAllClients,
    updateClientFromFront,
    filterClientListByThreads,
    filterClientListByTimeType,
    getNumberOfThreads,
} = clientReducer.actions;
