import {createSlice} from "@reduxjs/toolkit" ;

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user:null,
  },
  reducers: {
    login: (state, action) =>{
                                //Redux Toolkit allows us to write "mutating" logic in reducers. ıt
                                //doesnt actually mutate the state because it uses the Immer library,
                                //which detects changes to a "draft state" and produces a brand new 
                               //immutable state based off those changes
      state.value += action.payload;
    },
    logout: (state) => {
      state.user += null;
    },
  },
});

export const {login, logout} = userSlice.actions;

//The fnction below is called a selector and allows us to select a value from
//the state. Selectors can also be defined inline where they're used instead of
//in the slice file. For ex: "useSelector((state) => state.counter.value)" //this pulls the use info from onion shell, its a selector
export const selectUser = (state) => state.user.value;

export default userSlice.reducer;