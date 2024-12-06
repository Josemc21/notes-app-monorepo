import axios from "axios";
const baseUrl = "http://localhost:3001/api/notes";
//const baseUrl = 'https://notes-api-backend-dziu.onrender.com/api/notes';

export const getAll = () => {
  const request = axios.get(baseUrl);
  const notExisting = {
    id: 404,
    content: "Not found",
    date: "2021-10-10T17:30:31.098Z",
    important: false,
  };
  return request.then((response) => response.data || notExisting);
};
/* return axios
    .get(baseUrl)
    .then(response => {
        const {data} = response;
        return data;
    }); */

export const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

/* export const create = ({ name, body, userId}) => {
  return axios
  .post(baseUrl, { name, body, userId})
  .then(response => {
    const {data} = response;
    return data;
  });
} */

//export default { getAll, create };
