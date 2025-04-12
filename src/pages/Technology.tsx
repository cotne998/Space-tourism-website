import styled from "styled-components";
import { CategoryName } from "./Destination";
import data from "../data.json";
import { useEffect, useState } from "react";
import { Role } from "./Crew";
import { MemberName } from "./Crew";
import { TextContent } from "./Destination";

export default function Technology() {
  const technology: string[] = [];
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  for (let i = 0; i < data.technology.length; i++) {
    technology.push(data.technology[i].name);
  }

  console.log(currentIndex);

  const handleTechnology = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    document.body.classList.add("technology-bg");

    return () => {
      document.body.classList.remove("technology-bg");
    };
  }, []);

  return (
    <>
      <CategoryName>SPACE LAUNCH 101</CategoryName>
      <Container>
        <TechImg src={data.technology[currentIndex].images.landscape} />
        <LowerHalf>
          <FilterNumbers>
            {technology.map((item, index) => {
              let isActive = index === currentIndex;

              return (
                <Num
                  style={{
                    backgroundColor: isActive ? "white" : "",
                    color: isActive ? "black" : "",
                    transition: "0.2s",
                  }}
                  onClick={() => handleTechnology(index)}
                  key={item}>
                  {index + 1}
                </Num>
              );
            })}
          </FilterNumbers>
          <TextWrap>
            <NameWrap>
              <Role>THE TERMINOLOGY...</Role>
              <MemberName>
                {data.technology[currentIndex].name.toUpperCase()}
              </MemberName>
            </NameWrap>
            <TextContent>
              {data.technology[currentIndex].description}
            </TextContent>
          </TextWrap>
        </LowerHalf>
        <TechImgDesktop src={data.technology[currentIndex].images.portrait} />
      </Container>
    </>
  );
}

const FilterNumbers = styled.div`
  display: flex;
  gap: 1.6rem;
  justify-content: center;

  @media only screen and (min-width: 90rem) {
    flex-direction: column;
    justify-content: space-between;
    height: 30rem;
  }
`;

const Num = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: transparent;
  border: 1px solid #ffffff74;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  cursor: pointer;

  @media only screen and (min-width: 48rem) {
    width: 5.6rem;
    height: 5.6rem;
    font-size: 2.4rem;
  }

  @media only screen and (min-width: 90rem) {
    width: 8rem;
    height: 8rem;
    font-size: 3.2rem;
  }
`;

const TechImg = styled.img`
  width: 100%;
  height: auto;

  @media only screen and (min-width: 48rem) {
    margin-top: 8.8rem;
  }

  @media only screen and (min-width: 90rem) {
    display: none;
  }
`;

const TechImgDesktop = styled.img`
  display: none;

  @media only screen and (min-width: 90rem) {
    display: block;
    width: 60rem;
  }
`;

const LowerHalf = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media only screen and (min-width: 48rem) {
    max-width: 51.2rem;
    margin: auto;
  }

  @media only screen and (min-width: 90rem) {
    flex-direction: row;
    margin: unset;
    gap: 6.4rem;
  }
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const NameWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media only screen and (min-width: 90rem) {
    flex-direction: row;
    margin: unset;
    gap: 6.4rem;
    align-items: center;
    padding-bottom: 20rem;
    width: 100%;
    justify-content: center;
  }
`;
