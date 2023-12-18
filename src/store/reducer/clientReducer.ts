import { createSlice } from "@reduxjs/toolkit";
import { IClient } from "types/types";

interface IInitialStateAdmin {
    clientList: IClient[];
    filterClientList: IClient[];
    stream: number;
    clientFullInfoFromList: IClient | null;
    clientEmailFromList: string;
    personalPaymentUrl: string;
    sortByPaymentTime: string;
    statusPayment: number;
    numberOfThreads: number[];
}

const initialState: IInitialStateAdmin = {
    clientList: [],
    filterClientList: [],
    stream: -1,
    sortByPaymentTime: "old",
    statusPayment: -1,
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
            state.stream = action.payload;
            state.statusPayment = -1;

            if (action.payload === -1) {
                state.sortByPaymentTime === "old"
                    ? (state.filterClientList = [...state.clientList])
                    : (state.filterClientList = [
                          ...state.clientList,
                      ].reverse());
                return;
            }

            state.sortByPaymentTime === "old"
                ? (state.filterClientList = [...state.clientList].filter(
                      (el) => el.stream === action.payload,
                  ))
                : (state.filterClientList = [...state.clientList]
                      .reverse()
                      .filter((el) => el.stream === action.payload));
        },

        filterClientListByStatusPayment: (state, action) => {
            state.statusPayment = action.payload;

            if (action.payload === -1) {
                if (state.stream === -1) {
                    state.filterClientList = [...state.clientList];
                    return;
                } else {
                    state.filterClientList = [...state.clientList].filter(
                        (el) => el.stream === state.stream,
                    );
                    return;
                }
            }

            state.filterClientList = [...state.clientList].filter((el) => {
                if (el.paymentStatus === action.payload) {
                    if (el.stream === state.stream) {
                        return el;
                    }
                    if (state.stream === -1) {
                        return el;
                    }
                }
            });
        },

        filterClientListByPaymentTime: (state, action) => {
            state.sortByPaymentTime = action.payload;
            if (action.payload === "new") {
                state.filterClientList.reverse();
            }
            if (action.payload === "old") {
                state.filterClientList.reverse();
            }
        },

        getNumberOfStream: (state, action) => {
            state.stream = action.payload;
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

        getNumberOfThreadsForSelectList: (state, action) => {
            const threads: number[] = [];
            state.clientList.forEach((el) => {
                threads.push(el.stream);
            });
            state.numberOfThreads = [...new Set(threads)];
        },

        addClientFromFront: (state, action) => {
            if (state.sortByPaymentTime === "old") {
                state.clientList.push(action.payload);
                state.filterClientList.push(action.payload);
            } else {
                state.clientList.unshift(action.payload);
                state.filterClientList.unshift(action.payload);
            }
        },

        deleteClientFromFront: (state, action) => {
            state.clientList = [...state.clientList].filter(
                (el) => el.id !== action.payload,
            );

            if (state.sortByPaymentTime === "old") {
                state.filterClientList = [...state.clientList].filter(
                    (el) => el.id !== action.payload,
                );
            } else {
                state.filterClientList = [...state.clientList]
                    .filter((el) => el.id !== action.payload)
                    .reverse();
            }

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
    getNumberOfStream,
    createPersonalPaymentUrl,
    addClientFromFront,
    deleteClientFromFront,
    loadAllClients,
    updateClientFromFront,
    filterClientListByThreads,
    filterClientListByPaymentTime,
    filterClientListByStatusPayment,
    getNumberOfThreadsForSelectList,
} = clientReducer.actions;
