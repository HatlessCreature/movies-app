import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMovies, getMovies } from "../store/movies";
import MovieRow from "../components/MovieRow";



export default function AppMovies() {
    const movies = useSelector(selectMovies);
    const dispatch = useDispatch();

    const [sortCriteria, setSortCriteria] = useState("id");
    const [sortDirection, setSortDirection] = useState(1);
    const [selectedMovies, setSelectedMovies] = useState([]);

    const sortedMovies = [...movies.data].sort((m1, m2) => {
        if (m1[sortCriteria] < m2[sortCriteria]) {
            return -1 * sortDirection;
        }
        if (m1[sortCriteria] > m2[sortCriteria]) {
            return 1 * sortDirection;
        }
        return 0;
    });

    function sortBy(criteria) {
        setSortCriteria(criteria);

        if (criteria == sortCriteria) {
            setSortDirection(-1 * sortDirection);
        } else {
            setSortDirection(1);
        }
    }

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    function handleSelectMovie(id) {
        // const index = sortedMovies.findIndex(mov => mov.id === id);
        if (selectedMovies.find(el => el === id)) {
            alert("Already selected");
            return;
        }
        setSelectedMovies([...selectedMovies, id])
    }

    return (
        <div>
            <h1>Movies</h1>

            {sortedMovies.length ? (
                <div>
                    <div>Sort by:
                        <button onClick={() => sortBy("title")}>Title</button>
                        <button onClick={() => sortBy("duration")}>Duration</button>
                    </div>
                    {selectedMovies.length ? (
                        <div>Selected {selectedMovies.length}</div>
                    ) : (
                        <div>None selected</div>
                    )}
                    <ul>
                        {sortedMovies.map((movie) => (
                            <MovieRow key={movie.id} movie={movie} handleSelectMovie={handleSelectMovie} />
                        ))}
                    </ul>
                </div>
            ) : (
                <div>There are no movies that meet the search term.</div>
            )}
        </div>
    );
}