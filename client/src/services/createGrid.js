import axios from "axios";

const createGrid = async (newGridtData) => {
  return axios
    .post("http://localhost:4000/grids", newGridtData)
    .then((a) => console.log(111, a));
};

export default createGrid;
