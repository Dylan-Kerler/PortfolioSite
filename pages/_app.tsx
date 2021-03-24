import Head from 'next/head';
import '../styles/globals.css'
import { Theme } from "../context/Theme";
import styled, { ThemeContext } from "styled-components";
import { useContext } from 'react';

const AppBodyContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: 'Roboto', sans-serif;    
    font-size: 15px;
    height: 100%;
    width: 100%;
`;

const AppBody: React.FC = ({ children, ...props }) => {
    return (
        <AppBodyContainer {...props}>
            <div id={"root"}>
                {children}
            </div>
        </AppBodyContainer>
    );
}

const App = ({ Component, pageProps }: { Component: React.FC, pageProps: object })  => {
    return (
        <Theme>
            <Head>
                <title>Dylan Kerler</title>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>            
            </Head>
            
            <AppBody>
                <Component {...pageProps} />
            </AppBody>
        </Theme>
    );
}

export default App;
