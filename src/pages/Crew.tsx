import { CategoryName } from "./Destination";
import { TextContent } from "./Destination";
import styled from "styled-components";
import data from "../data.json";
import { useEffect, useState } from "react";

export default function Crew() {
  const crewMembers: string[] = [];
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  for (let i = 0; i < data.crew.length; i++) {
    crewMembers.push(data.crew[i].name);
  }

  const handleCrew = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    document.body.classList.add("crew-bg");

    return () => {
      document.body.classList.remove("crew-bg");
    };
  }, []);

  return (
    <>
      <CategoryName>MEET YOUR CREW</CategoryName>

      <Container>
        <MainSection>
          <TextSection>
            <NameWrap>
              <Role>{data.crew[currentIndex].role.toUpperCase()}</Role>
              <MemberName>
                {data.crew[currentIndex].name.toUpperCase()}
              </MemberName>
            </NameWrap>
            <TextContent>{data.crew[currentIndex].bio}</TextContent>
          </TextSection>
          <Carousel>
            {crewMembers.map((member, index) => {
              let isActive = index === currentIndex;

              return (
                <Circle
                  style={{ backgroundColor: isActive ? "white" : "" }}
                  onClick={() => handleCrew(index)}
                  key={member}></Circle>
              );
            })}
          </Carousel>
        </MainSection>
        <CrewImg src={data.crew[currentIndex].images.png} />
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  justify-content: space-between;

  @media only screen and (min-width: 90rem) {
    flex-direction: row;
    align-items: center;
    max-width: 144rem;
    margin: auto;
  }
`;

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const TextSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media only screen and (min-width: 48rem) {
    max-width: 51.2rem;
    margin: auto;
  }

  @media only screen and (min-width: 90rem) {
    text-align: left;
  }
`;

const Carousel = styled.div`
  width: 100%;
  display: flex;
  gap: 1.6rem;
  justify-content: center;
`;

const Circle = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: #ffffff65;
  cursor: pointer;
`;

export const MemberName = styled.h1`
  font-family: "Bellefair";
  font-size: 2.4rem;
  font-weight: 400;
  color: white;
  text-align: center;

  @media only screen and (min-width: 48rem) {
    font-size: 4rem;
  }

  @media only screen and (min-width: 90rem) {
    text-align: left;
    font-size: 5.6rem;
  }
`;

export const Role = styled.h2`
  text-align: center;
  font-family: "Bellefair";
  color: #ffffff7c;
  font-size: 1.8rem;
  font-weight: 400;

  @media only screen and (min-width: 48rem) {
    font-size: 2.8rem;
  }

  @media only screen and (min-width: 90rem) {
    text-align: left;
  }
`;

const NameWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const CrewImg = styled.img`
  width: 27rem;
  margin-left: 50%;
  transform: translateX(-50%);

  @media only screen and (min-width: 48rem) {
    width: 44.6rem;
  }

  @media only screen and (min-width: 90rem) {
    margin: unset;
    transform: unset;
    width: 53.9rem;
  }
`;
