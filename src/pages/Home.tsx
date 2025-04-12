import styled from "styled-components";
import data from "../data.json";
import { useNavigate } from "react-router-dom";

export default function Destination() {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/Destination");
  };

  return (
    <HomeWrap>
      <InfoSection>
        <span className="home-intro"> SO, YOU WANT TO TRAVEL TO</span>
        <h1 className="home-title">{data.home.title.toUpperCase()}</h1>
        <p className="home-text-content">{data.home.textContent}</p>
      </InfoSection>
      <ExploreButton onClick={handleExplore}>EXPLORE</ExploreButton>
    </HomeWrap>
  );
}

const HomeWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 11.9rem;

  @media only screen and (min-width: 48rem) {
    max-width: 51.2rem;
    margin: auto;
  }

  @media only screen and (min-width: 90rem) {
    max-width: unset;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    gap: unset;
    margin: unset;
    align-items: end;
  }
`;

const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  text-align: center;

  @media only screen and (min-width: 90rem) {
    max-width: 54rem;
    text-align: left;
  }
`;

const ExploreButton = styled.button`
  font-family: "Bellefair";
  width: 14.4rem;
  height: 14.4rem;
  border-radius: 50%;
  margin: auto;
  cursor: pointer;
  background-color: white;
  border: none;

  &:hover {
    box-shadow: 0 0 2rem rgba(255, 255, 255, 0.6),
      0 0 4rem rgba(255, 255, 255, 0.4);
    transform: scale(1.1); /* Slightly enlarges the button */
    transition: 0.2s;
  }

  &:active {
    box-shadow: 0 0 2rem rgba(255, 255, 255, 0.298),
      0 0 4rem rgba(255, 255, 255, 0.231);
    transform: scale(0.95); /* Slightly enlarges the button */
    transition: 0.2s;
  }

  @media only screen and (min-width: 48rem) {
    width: 27.2rem;
    height: 27.2rem;
  }

  @media only screen and (min-width: 90rem) {
    margin: unset;
    font-size: 3.2rem;
  }
`;
