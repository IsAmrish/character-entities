import React from "react";
import {
    StyledNavFluidWrapper,
    StyledNavWrapper,
    StyledNavLogoWrapper,
    StyledNavLogo,
    StyledNavLinksWrapper,
    StyledNavLink,
    StyledLink
} from "./style";
import { Link } from "react-router-dom";

import { Container } from "../container"
export const Navbar = () => {
    return (
        <StyledNavFluidWrapper>
            <Container>
                <StyledNavWrapper>
                    <StyledNavLogoWrapper>
                        <Link to="/">
                            <StyledNavLogo>Character Entities</StyledNavLogo>
                        </Link>
                    </StyledNavLogoWrapper>
                    <StyledNavLinksWrapper>
                        <StyledLink to="/entities">
                            <StyledNavLink href="#">Entities</StyledNavLink>
                        </StyledLink>
                    </StyledNavLinksWrapper>
                </StyledNavWrapper>
            </Container>
        </StyledNavFluidWrapper>
    )
}