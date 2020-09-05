import styled from "styled-components";
import { colors, fontWeights } from "../../tokens"
export const FooterWrapper = styled.div`
    height: 160px;
    text-align: center;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FooterTitle = styled.p`
    font-size: 18px;
    color: ${colors.black};
    font-weight: ${fontWeights.semibold};
`