import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "@reach/router";

import Loader from "../Loader/Loader";

const SearchComponent = styled.div`
  input {
    font-size: 18px;
    padding: 5px 15px;
    color: #3b3a3a;
  }

  button {
    font-size: 20px;
    text-transform: uppercase;
    padding: 5px 20px;
    margin-left: 5px;
    background-color: DarkTurquoise;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
  }
`;

const StyledResults = styled.div`
  text-align: left;
  @media (max-width: 775px) {
    text-align: center;
  }

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

const Search = () => {
  const [data, setData] = useState({ results: [] });
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const handleSubmit = e => {
    e.preventDefault();
    setSearch(query);
  };

  const searchCharacter = async () => {
    try {
      let queryString = "";
      const page = Math.floor(Math.random() * 19) + 1;

      if (search) {
        queryString = `?name=${search}`;
      } else {
        queryString = `?page=${page}`;
      }

      const result = await axios(
        `https://rickandmortyapi.com/api/character/${queryString}`
      );

      setData(result.data);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(
    () => {
      searchCharacter();
    },
    [search]
  );

  return loading ? (
    <Loader />
  ) : (
    <SearchComponent>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="rick, morty, jerry, etc"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <StyledResults>
        <ul>
          {data.results.map(item => (
            <li key={item.id}>
              <Link to={`/details/${item.id}`}>
                <img src={item.image} alt={item.name} />

                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </StyledResults>
    </SearchComponent>
  );
};

export default Search;
