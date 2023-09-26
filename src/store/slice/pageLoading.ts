// THIRD-PARTY
import { createSlice } from '@reduxjs/toolkit';

// PROJECT IMPORTS

const initialState = {
    loading: false
};

const slice = createSlice({
    name: 'pageLoading',
    initialState,
    reducers: {
        updatePageLoading(state, action: { payload: boolean }) {
            state.loading = action.payload;
        }
    }
});

export const { updatePageLoading } = slice.actions;

export default slice.reducer;