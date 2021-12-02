import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getMovies } from "../store/movies";

export default function MovieSearch() {
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();

    function handleChangeSearchTerm(event) {
        setSearchTerm(event.target.value);
    }

    const search = () => {
        if (!searchTerm || searchTerm.length > 3) {
            dispatch(getMovies(searchTerm));
        }
    };

    useEffect(() => {
        search();
    }, [searchTerm]);

    return (
        <div>
            <input type="text" onChange={handleChangeSearchTerm} placeholder="Search movies" />
        </div>
    );
}