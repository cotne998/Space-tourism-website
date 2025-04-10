import styled from "styled-components";
import { CategoryName } from "./Destination";
import data from "../data.json";
import { useState } from "react";
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

  return (
    <Container>
      <CategoryName>SPACE LAUNCH 101</CategoryName>
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
          <TextContent>{data.technology[currentIndex].description}</TextContent>
        </TextWrap>
      </LowerHalf>
    </Container>
  );
}

const FilterNumbers = styled.div`
  display: flex;
  gap: 1.6rem;
  justify-content: center;
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
`;

const TechImg = styled.img`
  width: 100%;
  height: auto;
`;

const LowerHalf = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
`;
