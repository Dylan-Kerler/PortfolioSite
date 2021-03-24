import { useContext, useState } from "react";
import styled, { ThemeContext } from "styled-components";
import { Button } from "../../../core/Button";
import { MainTitle, MinorTitle } from "../../../core/Typography";
import { Modal, ModalProps } from "../../../core/Modal";
import { EmailModal } from "./EmailModal";
import { AboutModal } from "./AboutModal";
import { FeaturedProject } from "./FeaturedProject";

const Container = styled.div<{ isMinimized: boolean }>`
    width: 430px;

    display: grid;
    row-gap: 18px;
    
    transition: all 0.1s ease-out;

    #text {
        display: grid;
        row-gap: 6px;  
    }

    margin-left: 120px;
    margin-top: ${({ isMinimized }) => isMinimized ? "0" : "50vh"};
    transform: ${({ isMinimized }) => isMinimized ? "scale(0.7) translateX(-50%)" : "translateY(-50%)"};

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
    const [isMinimized, setIsMinimized] = useState(false);

    return (
        <div style={{ height: "100vh", overflow: "scroll" }}>
            <Container isMinimized={isMinimized} id={"summary"}>
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
                    <Button 
                        style={{ 
                            gridColumn: "1/3", 
                            width: "100%", 
                            backgroundColor: isMinimized ? theme.colors.primary : "",
                            color: isMinimized ? "white" : ""
                        }} 
                        onClick={() => setIsMinimized(!isMinimized)}
                    >
                        {isMinimized ? "Hide" : "Show"} Featured Project
                    </Button>
                </div>

                <EmailModal isOpen={showEmail} onClose={() => setShowEmail(false)}/>
                <AboutModal isOpen={showAbout} onClose={() => setShowAbout(false)}/>
            </Container>

            {
                isMinimized &&
                    <FeaturedProject/>
            }
        </div>
    );
};