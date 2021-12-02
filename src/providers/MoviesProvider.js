import HttpProvider from "./HttpProvider";

class MoviesProvider extends HttpProvider {
  getMovies = async (title = "") => {
    let endpoint = "/movies";
    if (title) {
      endpoint += `?title=${title}`;
    }
    const { data } = await this.client.get(endpoint);

    return data;
  };
}

export default new MoviesProvider();