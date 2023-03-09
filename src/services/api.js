import axios  from "axios";

export const api = axios.create({
  baseURL: "http://pocs.digitalpages.com.br/mock/api/fruits-api/",
});
