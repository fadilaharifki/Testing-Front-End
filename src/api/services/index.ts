import axios from "axios";

// Create an instance of Axios with a base URL
const instanceApiAxios = axios.create({
  baseURL: "https://swapi.dev/api/",
  // timeout: 10000,
});

export default instanceApiAxios;
