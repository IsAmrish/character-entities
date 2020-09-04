import React from "react";
import { StyledContainer } from "./style"
export const Container = ({ children }) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}