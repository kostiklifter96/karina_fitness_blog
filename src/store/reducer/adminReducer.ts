import { createSlice } from "@reduxjs/toolkit";

interface IInitialStateAdmin {
    statusLogIn: boolean;
    statusSendEmailFromAdmin: boolean;
    statusCreateClient: boolean;
    statusCreatePayment: boolean;
}

const initialState: IInitialStateAdmin = {
    statusLogIn: JSON.parse(localStorage.getItem("logIn") || "false") || false,
    statusSendEmailFromAdmin: false,
    statusCreateClient: false,
    statusCreatePayment: false,
};

export const adminReducer = createSlice({
    name: "ADMIN",
    initialState,
    reducers: {
        changeStatusLogIn: (state, action) => {
            state.statusLogIn = action.payload;
        },
        changeStatusSendEmailFromAdmin: (state, action) => {
            state.statusSendEmailFromAdmin = action.payload;
        },
        changeStatusCreateClient: (state, action) => {
            state.statusCreateClient = action.payload;
        },
        changeStatusCreatePayment: (state, action) => {
            state.statusCreatePayment = action.payload;
        },
    },
});

export const {
    changeStatusLogIn,
    changeStatusSendEmailFromAdmin,
    changeStatusCreateClient,
    changeStatusCreatePayment,
} = adminReducer.actions;
