import React from "react";
import { Navbar } from "../navbar";
import { Footer } from "../footer";
import { Container } from "../../components/container"
export const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Navbar />
            {children}
            <Container>
                <Footer />
            </Container>
        </React.Fragment>
    )
}