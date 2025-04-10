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
`;

const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  text-align: center;
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
`;
