import styled from 'styled-components';
import { colors, fontSizes } from "../../tokens";

export const StyleHeading = styled.h2`
    font-size: ${fontSizes["9"]};
    color: ${ colors.primary};
    max-width: 600px;
`
export const StylePara = styled.p`
    font-size: ${fontSizes["3"]};
    color: ${ colors.dark};
`

export const HeroWrapper = styled.div`
    padding: 40px 0px;
    height: 50vh;
    background: ${colors.light};
`