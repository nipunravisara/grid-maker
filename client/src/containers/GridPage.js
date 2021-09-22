import React, { useState, useEffect } from "react";
import fetchGridData from "../services/fetchGridData";
import { ReactPhotoCollage } from "react-photo-collage";
import styled from "styled-components";

const Container = styled.div`
  max-width: 95rem;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  margin-bottom: 5rem;
`;

export default function GridPage() {
  const [grids, setGrids] = useState([]);

  useEffect(() => {
    fetchGridData()
      .then((response) => setGrids(response.data))
      .catch((error) => console.log(error));
  }, []);

  const getPicturesList = (pictures) => {
    return pictures.map((picture) => {
      return { source: picture?.imageUrl };
    });
  };

  return grids.map((grid, index) => {
    return (
      <Container>
        <h3>{`Grid ${index + 1}`}</h3>
        <ReactPhotoCollage
          width="95rem"
          height={["250px", "170px"]}
          layout={[1, 4]}
          showNumOfRemainingPhotos={true}
          photos={getPicturesList(grid?.pictures)}
        />
      </Container>
    );
  });
}
