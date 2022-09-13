import axios from "axios";

import { BASE_URL,ENDPOINT } from "../constants";

export function fetchAllProducts(){

 return axios.get(`${BASE_URL}/${ENDPOINT.allProduct}`)
}