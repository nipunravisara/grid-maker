import axios from "axios";

const url = "http://localhost:4000/grids";

const fetchGridData = async () => {
  return axios
    .get(url)
    .then((response) => response)
    .catch((error) => error);
};

export default fetchGridData;
