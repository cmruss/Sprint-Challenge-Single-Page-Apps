import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";
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
export default function LocationsList() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/`)
      .then(response => {
        const locations = response.data.results.filter(location =>
          location.name.toLowerCase().includes(query.toLowerCase())
        );
        setData(locations)
        console.log(locations)
      })
      .catch(error =>{
        console.log('No dice.', error);
      })
  }, [query]);
  
  const handleInput = e => {
    setQuery(e.target.value)
  };
  return (
    <List className="location-list">
      <h2>Locations</h2>
      <SearchForm query={query} handleInput={handleInput}/>
      {data.map(data => {
        return (
          <CardContainer className="card-container">
            <LocationCard key={data.id} data={data}/>
          </CardContainer>
        );
      })}
    </List>
  );
}
