import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import Loader from "../Loader/Loader";
import Quote from "../Quote/Quote";

const DetailsComponent = styled.div`
  text-align: center;
`;

const StyledResults = styled.div`
  text-align: center;

  ul li {
    display: inline-block;
    margin: 20px;
    vertical-align: top;
    cursor: pointer;
  }
  ul li > a {
  }

  ul li span {
    display: block;
    text-align: center;
    width: 200px;
  }

  a img {
    width: 200px;
    cursor: pointer;
  }
`;

const Details = route => {
  const [data, setData] = useState({ results: [] });
  const [loading, setLoading] = useState(true);

  const getCharacter = async () => {
    try {
      const result = await axios(
        `https://rickandmortyapi.com/api/character/${route.id}`
      );

      setData(result.data);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getCharacter();
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <DetailsComponent>
      <StyledResults>
        <img src={data.image} alt={data.name} />
        <h3>{data.name}</h3>
        <div>
          Race : {data.species} <span>{data.status}</span>
        </div>
        <div>Estimated location : {data.location.name}</div>
      </StyledResults>
      <Quote />
    </DetailsComponent>
  );
};

export default Details;
