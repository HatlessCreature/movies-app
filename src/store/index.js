import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/slice";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movies: moviesReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

for (const saga in sagas) {
    sagaMiddleware.run(sagas[saga]);
}

export default store;