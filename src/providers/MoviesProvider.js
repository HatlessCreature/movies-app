import HttpProvider from "./HttpProvider";

class MoviesProvider extends HttpProvider {
  getMovies = async () => {
    const { data } = await this.client.get("/movies");
    return data;
  };
}

export default new MoviesProvider();