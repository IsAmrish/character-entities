import styled from "styled-components";
import { fontSizes, fontWeights, colors } from "../../tokens";
import { Link } from "react-router-dom";
export const StyledNavFluidWrapper = styled.div`
    background-color: ${colors.light};
`;

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

export const StyledNavLogo = styled.span`
    font-size: ${fontSizes["6"]};
    font-weight: ${fontWeights.semibold};
    color: ${colors.dark};
`

export const StyledLink = styled(Link)`
    text-decoration: none;
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