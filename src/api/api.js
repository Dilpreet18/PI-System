import axios from "axios";

export const getData = (brand) =>
  axios.get(`http://localhost:8080/?query=${brand}`);
