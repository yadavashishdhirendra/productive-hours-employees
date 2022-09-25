import { createReducer } from "@reduxjs/toolkit";
const initialState = {};

export const createClientReducer = createReducer(initialState, {
  // LOGIN
  CreateClientRequest: (state) => {
    state.loading = true;
  },
  CreateClientSuccess: (state, action) => {
    state.loading = false;
    state.client = action.payload;
  },
  CreateClientFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  CreateClientReset: (state) => {
    state.loading = false;
    state.client = null;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});

export const getOwnClientReducer = createReducer(initialState, {
  // LOGIN
  getOwnClientRequest: (state) => {
    state.loading = true;
  },
  getOwnClientSuccess: (state, action) => {
    state.loading = false;
    state.clients = action.payload;
  },
  getOwnClientFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});

export const getsingleClientTask = createReducer(initialState, {
  // LOGIN
  getsingleClientTaskRequest: (state) => {
    state.loading = true;
  },
  getsingleClientTaskSuccess: (state, action) => {
    state.loading = false;
    state.task = action.payload;
  },
  getsingleClientTaskFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});

export const deleteclient = createReducer(initialState, {
  // LOGIN
  delclientwithtaskRequest: (state) => {
    state.loading = true;
  },
  delclientwithtaskSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  delclientwithtaskFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  delclientwithtaskReset: (state, action) => {
    state.loading = false;
    state.message = null;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});


export const getAllClients = createReducer(initialState, {
  // LOGIN
  getAllClientsRequest: (state) => {
    state.loading = true;
  },
  getAllClientsSuccess: (state, action) => {
    state.loading = false;
    state.clients = action.payload;
  },
  getAllClientsFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});

export const getSingleClients = createReducer(initialState, {
  // LOGIN
  getClientDetailsRequest: (state) => {
    state.loading = true;
  },
  getClientDetailsSuccess: (state, action) => {
    state.loading = false;
    state.clients = action.payload;
  },
  getClientDetailsFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});

export const updateClient = createReducer(initialState, {
  // LOGIN
  UpdateClientRequest: (state) => {
    state.loading = true;
  },
  UpdateClientSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  UpdateClientFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  UpdateClientReset: (state) => {
    state.loading = false;
    state.message = null;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});