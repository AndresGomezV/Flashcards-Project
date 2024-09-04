import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    cards: {},
};

export const cardsSlice = createSlice({
    name: "cards",
    initialState: initialState,
    reducers: {
        addCard: (state, action) => {
            const { id, front, back } = action.payload;
            state.cards[id] = { id, front, back };
        }
    }
})

export const { addCard } = cardsSlice.actions;

export default cardsSlice.reducer;

export const selectCardById = (id) => (state) => state.cards.cards[id];