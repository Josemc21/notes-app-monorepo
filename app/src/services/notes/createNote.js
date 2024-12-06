import axios from "axios";

export const createNote = ({ name, body, userId }) => {
  return axios
    .post("https://jsonplaceholder.typicode.com/comments", {
      name,
      body,
      userId,
    })
    .then((response) => {
      const { data } = response;
      return data;
    });
};
