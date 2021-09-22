import axios from "axios";

const url =
  "https://dev-pb-apps.s3-eu-west-1.amazonaws.com/collection/CHhASmTpKjaHyAsSaauThRqMMjWanYkQ.json";

const fetchUserData = async () => {
  return axios
    .get(url)
    .then((response) => response)
    .catch((error) => error);
};

export default fetchUserData;
