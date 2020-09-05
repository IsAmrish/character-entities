import React from "react";
import { StyledCardWrapper, StyledHTMLCode } from "./style";
export const Card = ({ entity }) => {
    return (
        <StyledCardWrapper>
            <StyledHTMLCode dangerouslySetInnerHTML={{ __html: `${entity.htmlcode}` }}></StyledHTMLCode>
            <div>{entity.name}</div>
            <div>{entity.csscode}</div>
        </StyledCardWrapper>
    )
}