import React, { useState } from "react";
import { StyledInput, StyledFormWrapper } from "./style";
import { Card } from "../card";
import * as entities from "../../data/entities.json";
export const Search = () => {

    const [inputValue, setInputValue] = useState('');
    const [searchedValue, setSearchedValue] = useState([]);

    const handleOnChange = (e) => {
        setInputValue(e.target.value);
        setSearchedValue(searchByName(inputValue));
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setInputValue('');
        setSearchedValue([]);

    }

    const searchByName = (name) => {
        return entities.default.filter(res => res.name.slice(0, name.length) === name);
    }
    return (
        <React.Fragment>
            <StyledFormWrapper>
                <form onSubmit={handleOnSubmit}>
                    <StyledInput type="text" placeholder="Type something..." onChange={handleOnChange} value={inputValue} />
                </form>
                {
                    searchedValue && searchedValue.map(entity => {
                        return <Card key={entity.name} entity={entity} />
                    })
                }
            </StyledFormWrapper>
        </React.Fragment>
    )
}