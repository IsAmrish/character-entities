import React from "react";
import {
    StyledNavWrapper,
    StyledNavLogoWrapper,
    StyledNavLogo,
    StyledNavLinksWrapper,
    StyledNavLink
} from "./style"
export const Navbar = () => {
    return (
        <StyledNavWrapper>
            <StyledNavLogoWrapper>
                <StyledNavLogo>CSS Entities</StyledNavLogo>
            </StyledNavLogoWrapper>
            <StyledNavLinksWrapper>
                <StyledNavLink href="#">Entities</StyledNavLink>
                <StyledNavLink style={{ marginRight: '0px' }} href="#">Search</StyledNavLink>
            </StyledNavLinksWrapper>
        </StyledNavWrapper>
    )
}