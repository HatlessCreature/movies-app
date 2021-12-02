import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMovies, getMovies } from "../store/movies";
import MovieRow from "../components/MovieRow";



export default function AppMovies() {
    const movies = useSelector(selectMovies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    return (
        <div>
            <h1>Movies</h1>

            {movies.data.length ? (
                <ul>
                    {movies.data.map((movie) => (
                        <MovieRow key={movie.id} movie={movie} />
                    ))}
                </ul>
            ) : (
                <div>There are no movies that meet the search term.</div>
            )}
        </div>
    );
}