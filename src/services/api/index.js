import axios from "axios";
import { SAVE_USERNAME_PATH } from "../constants";

const api = axios.create({
  baseURL: "http://supermarketlist-api.herokuapp.com",
  headers: {
    username: localStorage.getItem(SAVE_USERNAME_PATH) || "",
  },
});
