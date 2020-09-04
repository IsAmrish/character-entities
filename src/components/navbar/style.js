import styled from "styled-components";
import { fontSizes, fontWeights, colors } from "../../tokens"
export const StyledNavWrapper = styled.div`
    max-height: 80px;
    height: 80px;
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const StyledNavLogoWrapper = styled.div`
    margin-top: auto;
    margin-bottom: auto;
`

export const StyledNavLogo = styled.h1`
    font-size: ${fontSizes["6"]};
    font-weight: ${fontWeights.semibold};
    color: ${colors.dark};
`

export const StyledNavLinksWrapper = styled.div`
    margin-top: auto;
    margin-bottom: auto;
`

export const StyledNavLink = styled.a`
    font-size: ${fontSizes["3"]};
    text-decoration: none;
    margin: 0px 16px;
`