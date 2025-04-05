import { createSlice, createSelector } from "@reduxjs/toolkit";
import type { CurrentUser, UserDTO } from "@/types/User";
import { RootState } from "@/lib/store";

export interface AuthenticationState {
  authToken: string | null;
  users: UserDTO[];
  currentUser: CurrentUser | null;
}

const initialState: AuthenticationState = {
  authToken: null,
  users: [],
  currentUser: null,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    createUser(state, action) {
      state.users.push({
        id: state.users.length + 1,
        ...action.payload,
        createdAt: new Date().toISOString(),
      });
    },
    signIn(state, action) {
      const user = state.users.find(
        (user) => user.email === action.payload.user
      );

      if (user && user.password === action.payload.password) {
        state.authToken = "shjdoiashdoahdoias";
        state.currentUser = {
          id: user.id,
          name: user.name,
          email: user.email,
        };
      }
    },
  },
});

const selectCurrentUser = (state: RootState) =>
  state.authentication.currentUser;
const selectAuthToken = (state: RootState) => state.authentication.authToken;

export const selectCurrentUserInfo = createSelector(
  [selectCurrentUser],
  (user) => {
    if (!user) return null;

    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  }
);

export const selectIsUserAuthenticated = createSelector(
  [selectAuthToken],
  (token) => !!token
);

export const { createUser, signIn } = authenticationSlice.actions;

export default authenticationSlice.reducer;
