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
    padding: 100px 0px;
    background: ${colors.light};
`