import styled from "styled-components";
import { colors } from "../../tokens"
export const StyledInput = styled.input`
    height: 35px;
    border-radius: 8px;
    max-width: 900px;
    width:  100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0px;
    border: 1px solid ${colors.primary};
    :focus {
      border: 1px solid ${colors.primary};
      outline: none;
    }
    :active {
      border: 1px solid ${colors.primary};
      outline: none;
    }
`;

export const StyledFormWrapper = styled.div`
    padding: 30px 0px;
`