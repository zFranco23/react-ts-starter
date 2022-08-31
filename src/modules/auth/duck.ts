import { createAsyncThunk, createReducer, isAnyOf } from "@reduxjs/toolkit";
import listenerMiddleware from "../../middlewares/listeners";


const fetchUser = createAsyncThunk("FetchUsers",
async (undefined, thunkApi) => {
  const response = await fetch("https://mock.codes/200");
  const res = await response.json();
  return res;
}
);

listenerMiddleware.startListening({
  matcher: isAnyOf(fetchUser.rejected),
  effect: async (action, listenerAPI) => {
    listenerAPI.dispatch(fetchUser());
  }
})

export interface AuthState {
  isLoading?: boolean;
}

const initialState: AuthState = {
  isLoading: false,
};

const authReducer = createReducer(initialState, (builder) => {
  builder.addDefaultCase((state, action) => {
    state = state;
  });
});

export default authReducer;
