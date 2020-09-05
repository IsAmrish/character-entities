import React from "react";
import { StyleHeading, HeroWrapper, StylePara } from "./style";
import { Container } from "../../components/container";
export const Home = () => {
    return (
        <React.Fragment>
            <HeroWrapper>
                <Container>
                    <StyleHeading>Welcome to Character Entities site</StyleHeading>
                    <StylePara>Here you can find out all Web character entities properties</StylePara>
                </Container>
            </HeroWrapper>
        </React.Fragment>
    )
}

