import { takeLatest, call, put } from "redux-saga/effects";
import { getMovies, setMovies } from "./slice";
import moviesProvider from "../../providers/MoviesProvider";

function* handleGetMovies(action) {
    try {
        const movies = yield call(moviesProvider.getMovies, action.payload);
        yield put(setMovies(movies));
    } catch (error) {
        console.error(error);
    }
}

export function* watchGetMovies() {
    yield takeLatest(getMovies.type, handleGetMovies);
}