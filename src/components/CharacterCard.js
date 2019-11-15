import React from "react";
import styled from "styled-components";

const Card = styled.div`
padding: 5%;
box-shadow: 5px 10px 10px;
border-radius: 5px;
text-align: center;
margin: 5% auto;
  img{
    border-radius: 100%;
  }
`

export default function CharacterCard(props) {
    return (
      <Card className="character-card " key={props.data._id}>
        <h2>{props.data.name}</h2>
        <img className="profile" src={props.data.image}></img>
        <h3 className="details">{props.data.species}</h3>
        <h3 className="details">{props.data.gender}</h3>
        <h3 className="details">{props.data.status}</h3>
        <h3 className="details">{props.data.origin.name}</h3>
      </Card>
    );
}
