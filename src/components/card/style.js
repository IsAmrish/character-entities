import styled from "styled-components";
import { colors } from "../../tokens"

export const StyledCardWrapper = styled.div`
    padding: 30px 20px;
    background-color: ${colors.primary};
    color: ${colors.white};
    max-width: 900px;
    margin: 30px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.55s ease-in-out;
    :hover {
        background-color: ${colors.secondary};
        color: ${colors.black};
        transition: all 0.35s ease-in-out;
    }
`

export const StyledHTMLCode = styled.div`
    font-size: 32px;
`