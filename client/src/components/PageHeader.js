import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 50px;
  background-image: ${(props) => `url(${props.background})`};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  width: 100%;
  margin-bottom: 0.5rem;
`;

const ProfileCard = styled.div`
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem 2rem;
  border-radius: 0.5rem;
  text-align: center;
`;

const ProfileImage = styled.img`
  border-radius: 100px;
  width: 10rem;
  height: 10rem;
`;

const Email = styled.span`
  color: gray;
`;

export default function PageHeader({ user, cover }) {
  return (
    <Container background={cover && cover}>
      <ProfileCard>
        <ProfileImage
          src={"https://placeimg.com/640/640/people"}
          alt="Picture of the author"
        />
        <h2>{user?.name}</h2>
        <Email>{user?.email}</Email>
      </ProfileCard>
    </Container>
  );
}
