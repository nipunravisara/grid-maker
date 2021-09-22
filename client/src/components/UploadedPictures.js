import React, { useState } from "react";
import styled from "styled-components";
import FloatingButton from "./FloatingButton";
import createGrid from "../services/createGrid";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  max-width: 95rem;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
`;

const Image = styled.img`
  width: 25rem;
  height: 25rem;
  margin: 0.5rem;
  transition: 0.3s;
  border-radius: 10px;
  border: ${({ isSelected }) =>
    isSelected ? "10px solid #03c4a1" : "10px solid transparent"};
`;

const ImageContainer = styled.div`
  position: relative;
  text-align: center;
  display: inline-block;
  overflow: hidden;
`;

const OrderNumber = styled.div`
  padding: 1rem 1.5rem;
  border-radius: 12rem;
  color: black;
  font-size: 1.5rem;
  top: 50%;
  left: 50%;
  position: absolute;
  background-color: white;
  transform: translate(-50%, -50%);
`;

export default function UploadedPictures({ author, pictures }) {
  let history = useHistory();
  const [selectedImages, setSelectedImages] = useState([]);

  const selectImage = (pictureId, imageUrl) => {
    if (
      selectedImages.filter(
        (selectedImage) => selectedImage.pictureId === pictureId
      ).length > 0
    ) {
      setSelectedImages(
        selectedImages.filter(
          (selectedImage) => selectedImage.pictureId !== pictureId
        )
      );
    } else {
      setSelectedImages([...selectedImages, { pictureId, imageUrl }]);
    }
  };

  const getIsSelected = (pictureId) => {
    const ids = selectedImages.filter(
      (selectedImage) => selectedImage.pictureId === pictureId
    );

    if (ids.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  const getIsImageOrderNumber = (pictureId) => {
    const ids = selectedImages.map((selectedImage) => selectedImage.pictureId);
    return ids.indexOf(pictureId) + 1;
  };

  return (
    <Container>
      {pictures?.map((picture) => (
        <ImageContainer key={picture?.id}>
          <Image
            onClick={() => selectImage(picture?.id, picture?.picture)}
            src={picture?.picture}
            alt="Uploaded"
            isSelected={getIsSelected(picture?.id)}
          />
          {getIsSelected(picture?.id) && (
            <OrderNumber>{getIsImageOrderNumber(picture?.id)}</OrderNumber>
          )}
        </ImageContainer>
      ))}
      <FloatingButton
        title="Create Grid"
        onClick={() =>
          createGrid({
            author,
            pictures: selectedImages,
          }).then(() => history.push("/grid"))
        }
      />
    </Container>
  );
}
