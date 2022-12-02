import React from 'react';
import {createSlice} from '@reduxjs/toolkit';

export interface IModalState {
    ref: React.ReactNode,
    isOpened: boolean,
}

const initialState = {
    ref: null,
    isOpened: false,
} as Partial<IModalState>;

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, modalRef) => {
            state.ref = modalRef.payload;
            state.isOpened = true;
        },
        closeModal: (state) => {
            state.ref = null;
            state.isOpened = false;
        },
    },
});

export const {
    openModal,
    closeModal,
} = modalSlice.actions;

export default modalSlice.reducer;
