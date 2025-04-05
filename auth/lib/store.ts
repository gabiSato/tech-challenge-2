import { configureStore } from "@reduxjs/toolkit";

import authenticationReducer from "@/lib/features/authentication/authentication-slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      authentication: authenticationReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
