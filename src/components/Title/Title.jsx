import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

import { HeadersColorContext } from "../../context/context";

const StyledTitle = styled.h1`
  font-size: 49px;
  font-family: "Creepster", cursive;
  display: inline-block;
  color: ${props => props.titleColor};
  background-color: #fff;
  padding: 10px 30px;
  border-radius: 10px;
  margin-left: 60px;
  cursor: pointer;
  @media (max-width: 775px) {
    margin-left: 0px;
  }
`;

const StyledHeader = styled.div`
  background-color: DarkTurquoise;
  margin-bottom: 35px;
  text-align: left;
  @media (max-width: 775px) {
    text-align: center;
  }
`;

const Title = () => {
  const HeadersColor = useContext(HeadersColorContext);

  return (
    <StyledHeader>
      <Link to="/">
        <StyledTitle titleColor={HeadersColor}>Rick and Morty</StyledTitle>
      </Link>
    </StyledHeader>
  );
};

export default Title;
