export default function MovieRow({ movie }) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
            }}
        >
            <div>
                <img src={movie.image_url} width="100" height="75" alt="Preview of the movie" />
            </div>
            <div>{movie.title}</div>
            <div>{movie.director}</div>
            <div>{movie.duration}</div>
            <div>{movie.release_date}</div>
            <div>{movie.genre}</div>

        </div>
    );
}