import React, { useState, useEffect } from "react";
import fetchUserData from "../services/fetchUserData";
import PageHeader from "../components/PageHeader";
import UploadedPictures from "../components/UploadedPictures";

const HomePage = (props) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchUserData()
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <PageHeader user={user?.author} cover={user?.cover} />
      <UploadedPictures fetch={user?.author?.name} pictures={user?.entries} />
    </div>
  );
};

export default HomePage;
