import { createSlice } from "@reduxjs/toolkit";

interface IInitialStateAdmin {
    statusLogIn: boolean;
    statusSendEmailFromAdmin: boolean;
    statusCreateClient: boolean;
    statusCreatePayment: boolean;
    statusCreateNewsletter: boolean;
    statusRegistationClient: boolean;
}

const initialState: IInitialStateAdmin = {
    statusLogIn: JSON.parse(localStorage.getItem("logIn") || "false") || false,
    statusSendEmailFromAdmin: false,
    statusCreateClient: false,
    statusCreatePayment: false,
    statusCreateNewsletter: false,
    statusRegistationClient: false,
};

export const adminReducer = createSlice({
    name: "ADMIN",
    initialState,
    reducers: {
        changeStatusRegistationClient: (state, action) => {
            state.statusRegistationClient = action.payload;
        },
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
        changeStatusCreateNewsletter: (state, action) => {
            state.statusCreateNewsletter = action.payload;
        },
    },
});

export const {
    changeStatusLogIn,
    changeStatusSendEmailFromAdmin,
    changeStatusCreateClient,
    changeStatusCreatePayment,
    changeStatusCreateNewsletter,
    changeStatusRegistationClient,
} = adminReducer.actions;
