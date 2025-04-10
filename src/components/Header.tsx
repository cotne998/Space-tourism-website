import styled from "styled-components";
import LogoIcon from "/assets/shared/logo.svg";
import HamburgerIcon from "/assets/shared/icon-hamburger.svg";
import { Link } from "react-router-dom";
import CloseIcon from "/assets/shared/icon-close.svg";
import { useState } from "react";

const endPoints: string[] = ["Home", "Destination", "Crew", "Technology"];

export default function Header() {
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);

  return (
    <>
      <header>
        <Logo src={LogoIcon} alt="logo icon" />
        <Hamburger
          onClick={() => setDisplayMenu(true)}
          src={HamburgerIcon}
          alt="menu icon"
        />
      </header>
      {displayMenu && (
        <MobileNav>
          <Close onClick={() => setDisplayMenu(false)} src={CloseIcon} />
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "3.2rem",
              marginTop: "13rem",
            }}>
            {endPoints.map((endPoint) => {
              return (
                <MobileList key={endPoint} style={{ color: "white" }}>
                  <Link
                    onClick={() => setDisplayMenu(false)}
                    style={{ all: "unset", cursor: "pointer" }}
                    to={`/${endPoint}`}>
                    {endPoint.toUpperCase()}
                  </Link>
                </MobileList>
              );
            })}
          </ul>
        </MobileNav>
      )}
    </>
  );
}

const Logo = styled.img`
  width: 4rem;
`;

const Hamburger = styled.img`
  cursor: pointer;
`;

const MobileNav = styled.nav`
  height: 100vh;
  width: 25rem;
  position: fixed;
  top: 0;
  right: 0;
  padding-left: 3.2rem;
  background-color: rgba(68, 68, 68, 0.23);
  backdrop-filter: blur(30px);
  z-index: 1000;
`;

const MobileList = styled.li`
  all: unset;
  font-family: "Barlow Condensed";
  font-size: 1.6rem;
  display: flex;
`;

const Close = styled.img`
  position: absolute;
  width: 2.4rem;
  right: 2.4rem;
  top: 3.2rem;
  cursor: pointer;
`;
