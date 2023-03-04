import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserData } from '../AllInterfaces/AllInterfaces';

const initialState = {
    currentUser:{} as UserData | null,
}

const ReduxState = createSlice({
  name: "PiggyVest",
  initialState,
  reducers: {
    User:(state,{payload}:PayloadAction<UserData>) =>{
        state.currentUser = payload;
    },
    logout:(state)=>{
        state.currentUser = null;
    }
  }
});

export const {User} = ReduxState.actions

export default ReduxState.reducer;