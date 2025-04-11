import styled from "styled-components";
import data from "../data.json";
import { useEffect, useState } from "react";

export default function Destination() {
  const destinations: string[] = []; //destination names array
  const [destinationIndex, setDestinationIndex] = useState<number>(0); //save current index to this state

  for (let i = 0; i < data.destinations.length; i++) {
    destinations.push(data.destinations[i].name);
  } //loop through data.destinations array and pushing its names to destinations

  const handleDestination = (index: number) => {
    setDestinationIndex(index);
  }; //this function saves current index to destinationIndex state

  useEffect(() => {
    document.body.classList.add("destination-bg");

    return () => {
      document.body.classList.remove("destination-bg");
    };
  }, []); //adding class name to body to manipulate due route changing

  return (
    <>
      <CategoryName>PICK YOUR DESTINATION</CategoryName>
      <MainWrap>
        <DestinationImage
          src={data.destinations[destinationIndex].images.png}
        />
        <DestinationsSection>
          <ul className="destinations-container">
            {destinations.map((destination, index) => {
              const isActive = index === destinationIndex;

              return (
                <li
                  style={{
                    borderBottom: isActive ? "1px solid white" : "",
                    color: isActive ? "white" : "#ffffff72",
                    padding: "0.2rem",
                  }}
                  onClick={() => handleDestination(index)}
                  key={index}
                  className="destinations">
                  {destination.toUpperCase()}
                </li>
              );
            })}
          </ul>
          <DestinationName>
            {destinations[destinationIndex].toUpperCase()}
          </DestinationName>
          <TextContent>
            {data.destinations[destinationIndex].description}
          </TextContent>
          <hr style={{ color: "#ffffff94" }} />
          <LowerSection>
            <LowerWrap>
              <LowerTitle>AVG. DISTANCE</LowerTitle>
              <LowerInfo>
                {data.destinations[destinationIndex].distance.toUpperCase()}
              </LowerInfo>
            </LowerWrap>
            <LowerWrap>
              <LowerTitle>EST. TRAVEL TIME</LowerTitle>
              <LowerInfo>
                {data.destinations[destinationIndex].travel.toUpperCase()}
              </LowerInfo>
            </LowerWrap>
          </LowerSection>
        </DestinationsSection>
      </MainWrap>
    </>
  );
}

const MainWrap = styled.div`
  @media only screen and (min-width: 90rem) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 30rem;
  }
`;

export const CategoryName = styled.h3`
  font-family: "Barlow Condensed";
  font-size: 1.6rem;
  font-weight: 200;
  color: white;
  margin: auto;
  text-align: center;
  letter-spacing: 2px;

  @media only screen and (min-width: 48rem) {
    margin: unset;
    text-align: start;
    letter-spacing: 3px;
  }

  @media only screen and (min-width: 90rem) {
    margin-bottom: 11.7rem;
    font-size: 2.8rem;
  }
`;

const DestinationImage = styled.img`
  width: 15rem;
  margin-left: 50%;
  padding: 2.6rem 0;
  transform: translateX(-50%);

  @media only screen and (min-width: 48rem) {
    width: 30rem;
  }

  @media only screen and (min-width: 90rem) {
    margin: unset;
    width: 48rem;
    transform: unset;
  }
`;

const DestinationsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: 100%;

  @media only screen and (min-width: 48rem) {
    max-width: 51.4rem;
    margin-left: 50%;
    transform: translateX(-50%);
  }

  @media only screen and (min-width: 90rem) {
    max-width: 34.4rem;
    text-align: start;
    margin: unset;
  }
`;

export const DestinationName = styled.h1`
  font-family: "Bellefair";
  color: white;
  font-size: 5.6rem;
  font-weight: 200;
  text-align: center;

  @media only screen and (min-width: 48rem) {
    font-size: 8rem;
  }

  @media only screen and (min-width: 90rem) {
    text-align: left;
    font-size: 9.6rem;
  }
`;

export const TextContent = styled.p`
  font-family: "Barlow";
  color: #d0d6f9;
  font-size: 1.5rem;
  text-align: center;
  line-height: 2.5rem;

  @media only screen and (min-width: 48rem) {
    font-size: 1.6rem;
  }

  @media only screen and (min-width: 90rem) {
    text-align: start;
    font-size: 1.8rem;
  }
`;

const LowerSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media only screen and (min-width: 48rem) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const LowerWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.2rem;
`;

const LowerTitle = styled.span`
  font-family: "Barlow Condensed";
  font-size: 1.4rem;
  color: #d0d6f9;
  letter-spacing: 1px;
`;

const LowerInfo = styled.span`
  font-family: "Bellefair";
  font-size: 2.8rem;
  color: white;
  letter-spacing: 1px;
`;
