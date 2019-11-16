import React from "react";
import styled from "styled-components";

const Card = styled.div`
padding: 5%;
box-shadow: 5px 10px 10px;
border-radius: 5px;
text-align: center;
margin: 5% auto;
`
const Blob = styled.div`
background-color: darkcyan;
color: darkcyan;
border-radius: 100%
width: 400px;
height: 400px;
box-shadow: 5px 50px 100px 50px inset white;
`

export default function LocationCard(props) {
    return (
      <Card className="location-card " key={props.data.id}>
        <h2>{props.data.name}</h2>
        <Blob></Blob>
        <h3 className="details">{props.data.type}</h3>
        <h3 className="details">{props.data.dimension}</h3>
        <h3 className="details">Notable populous {props.data.residents.length}</h3>
      </Card>
    );
}
