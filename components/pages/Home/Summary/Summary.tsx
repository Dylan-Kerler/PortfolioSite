import { useContext, useState } from "react";
import styled, { ThemeContext } from "styled-components";
import { Button } from "../../../core/Button";
import { MainTitle, MinorTitle } from "../../../core/Typography";
import { Modal, ModalProps } from "../../../core/Modal";
import { EmailModal } from "./EmailModal";
import { AboutModal } from "./AboutModal";

const Container = styled.div`
    width: 430px;

    display: grid;
    row-gap: 18px;  

    #text {
        display: grid;
        row-gap: 6px;  
    }

    #buttons {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        row-gap: 12px;
        column-gap: 12px;
    }
`;

export const Summary = () => {
    const theme = useContext(ThemeContext);

    const [showEmail, setShowEmail] = useState(false);
    const [showAbout, setShowAbout] = useState(false);

    return (
        <Container id={"summary"}>
            <div id={"text"}>
                <MinorTitle style={{ marginBottom: -7 }}>Hello there! I am,</MinorTitle>
                <MainTitle>Dylan Kerler</MainTitle>
                <div>
                    <div>I'm a software engineer with 
                        <span style={{ color: theme.colors.textSecondary, fontWeight: "bold" }}> 3 years experience </span>
                        specialising in React, Javascript, NodeJS, Rust and Ethereum. Tech is fun :D. 
                    </div>
                </div>
            </div>

            <div id={"buttons"}>
                <Button style={{ width: "100%" }} onClick={() => setShowEmail(true)}>
                    Want to hire me?
                </Button>
                <Button style={{ width: "100%" }} onClick={() => setShowAbout(true)}>
                    About
                </Button>
                <Button style={{ gridColumn: "1/3", width: "100%" }}>Interactive Demo</Button>
            </div>

            <EmailModal isOpen={showEmail} onClose={() => setShowEmail(false)}/>
            <AboutModal isOpen={showAbout} onClose={() => setShowAbout(false)}/>
        </Container>
    );
};