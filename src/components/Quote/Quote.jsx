import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import Loader from "../Loader/Loader";

const QuoteComponent = styled.div`
  font-size: 32px;
  color: #7d7a7a;
  max-width: 70%;
  margin: 30px auto;
`;

const Quote = () => {
  const [data, setData] = useState({ results: [] });
  const [loading, setLoading] = useState(true);

  const getQuote = async () => {
    try {
      const result = await axios(
        `http://loremricksum.com/api/?paragraphs=1&quotes=1`
      );

      setData(result.data);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getQuote();
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <QuoteComponent>
      <p>{data.data}</p>
    </QuoteComponent>
  );
};

export default Quote;
