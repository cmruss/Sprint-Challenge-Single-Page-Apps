import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import styled from "styled-components";

const List = styled.section`
text-align: center;
`
const CardContainer = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
`
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        // const results = response.data.results;
        const characters = response.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        setData(characters)
        console.log(characters)
      })
      .catch(error =>{
        console.log('No dice.', error);
      })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [query]);
  
  const handleInput = e => {
    setQuery(e.target.value)
  };
  return (
    <List className="character-list">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      <h2>Characters</h2>
      <SearchForm query={query} handleInput={handleInput}/>
      {data.map(data => {
        return (
          <CardContainer className="card-container">
            <CharacterCard data={data}/>
          </CardContainer>
        );
      })}
    </List>
  );
}
