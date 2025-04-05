import { configureStore } from "@reduxjs/toolkit";

import transactionsReducer from "@/lib/features/transactions/transactions-slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      transactions: transactionsReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
