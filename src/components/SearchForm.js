import React from "react";
import styled from "styled-components";

const Input = styled.input`
  color: darkcyan;
  font-size: 1.2rem;
  height: 30px;
  width: 300px;
  border-radius: 10px;
  text-align: center
`

export default function SearchForm(props) {
  return (
    <section className="search-form">
      <form>
        <Input 
          type="text"
          onChange={props.handleInput}
          value={props.query}
          name="name"
          tabIndex="0"
          placeholder="search"
          autoComplete="off"
          />
      </form>
    </section>
  );
}
