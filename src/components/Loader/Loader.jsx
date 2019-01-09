import React, { useContext } from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

import { TextColorContext } from "../../context/context";

const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: bold;
`;

const Loader = () => {
  const TextColor = useContext(TextColorContext);

  return (
    <LoaderContainer>
      <span>Loading</span>
      <ReactLoading type="bubbles" color={TextColor} />
    </LoaderContainer>
  );
};

export default Loader;
