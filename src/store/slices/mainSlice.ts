import { createSlice, Dispatch } from '@reduxjs/toolkit';

interface ICardState {
  isLoaded: boolean;
}

const initialState: ICardState = {
  isLoaded: false,
};

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    getContantSuccess(state, action) {
      const resources = action.payload;
      state.isLoaded = true;
    },
  },
});

export const { getContantSuccess } = cardSlice.actions;

export default cardSlice.reducer;

export function getContant(isLoaded: boolean) {
  return (dispatch: Dispatch) => {
    dispatch(getContantSuccess(isLoaded));
  };
}
