import HttpProvider from "./HttpProvider";

class MoviesProvider extends HttpProvider {
  getMovies = async (page, title = "") => {
    let endpoint = `/movies?per_page=5&page=${page}`;
    if (title) {
      endpoint += `&title=${title}`;
    }
    const { data } = await this.client.get(endpoint);

    return data;
  };
}

export default new MoviesProvider();