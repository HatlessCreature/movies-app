import axios from "axios";

export default class HttpProvider {
    constructor() {
        this.client = axios.create({ baseURL: "http://localhost:8000/api", });
    }
}