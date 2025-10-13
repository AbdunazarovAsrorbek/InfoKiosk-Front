import { configureStore } from "@reduxjs/toolkit";

import FacultyReducer from "./faculty/reducer";
import RateServiceReducer from "./rate/reducer";
import ApplicationReducer from "./application/reducer";
import RectorateReducer from "./rectorate/reducer";

export const store = configureStore({
    reducer: {
        Faculty: FacultyReducer,
        RateService:RateServiceReducer,
        Application: ApplicationReducer,
        Rectorate: RectorateReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;