import { Main } from "next/document";
import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { TextButton } from "../../../core/Button";
import { MainTitle, MinorTitle } from "../../../core/Typography";

const Container = styled.div`
    display: grid;
    row-gap: 24px;
    width: 100%;
    padding-left: 120px;
    padding-top: 32px;
    padding-right: 120px;
    padding-bottom: 120px;
    max-width: 1000px;
    height: 100%;
    height: fit-content;
`;

export const FeaturedProject = () => {
    const theme = useContext(ThemeContext);

    return (
        <Container>
            <div style={{ display: "flex", }}>
                <MinorTitle>Featured Project - </MinorTitle>
                <TextButton 
                    color={theme.colors.textPrimary} 
                    style={{ marginLeft: 6 }} 
                    onClick={() => window.open("https://github.com/International-Financial-Exchange")}
                >
                    <MinorTitle>View Github</MinorTitle>
                </TextButton>
            </div>

            <TextButton color={theme.colors.textPrimary} onClick={() => window.open("https://interfinex.io")}>    
                <MainTitle>interfinex.io</MainTitle>
            </TextButton>

            <MinorTitle>Summary</MinorTitle>
            <div>
                interfinex.io is a website that I created from scratch - The smart contracts, the backend, the frontend, the server administration, 
                the marketing, the exchange listings etc. - The whole shebang! It's a peer-to-peer trading service built on Ethereum. It has margin
                trading, swap trading and initial liquidity offerings.
            </div>

            <MinorTitle>The Backend</MinorTitle>
            <div>
                The backend was built with Typescript and Web3.js. I spent a whole lotta time thinking about how I would organize the code so that
                it would be easy to maintain, debug and add new features. The architecture that I ended up with was a class and event-emitter based
                system. The server would be made up of a sequence of listeners and subscribers that pass information between each other. This kept
                everything modular and ensured that both small and large parts of the app could be swapped out and replaced if need be. 
            </div>


            <MinorTitle>The Frontend</MinorTitle>
            <div>
                The frontend was build with React, NextJS and EthersJS. NextJS was super useful because of the in-built chunk splitting and SSR giving 
                great performance straight out of the box. The build tools from NextJS were also really nice to use. From the get-go I wanted a great UI
                so all of the pixel sizings are constants that stick to the fibonacci sequence (golden ratio). In addition to this, stable controls were needed
                so the abstraction of logic into buttons, inputs and themeing had to be carefully considered so as to not become too abstract; A mistake which
                I had made in the past.
            </div>

            <MinorTitle>The Administration</MinorTitle>
            <div>
                To ensure stable up-time (i.e NEVER going down EVER) there were a few things to consider. The first of which was DDOS attacks. NextJS 
                takes a lot of the load there by distributing the client via CDN but the API on the servers still needed to be protected. The servers sit
                behind a load balancer which in turn sits behing an NGINX reverse proxy to handle rate limiting. The server was deployed in Docker containers
                to enable ease of deployment and reliability. The second thing to consider was data redundancy. The database I used was MongoDB which has a few 
                nice in-built features related to this but just to be super sure that the data would be safe, snapshots of the servers are taken every 12 hours.
            </div>

            <MinorTitle>The Smart Contracts</MinorTitle>
            <div>
                The smart contracts where written in Vyper. This is because I thought it would be easier to write secure code in a simpler language with
                fewer features to mess something up. While this was true, the limitations of the language mean't that I had to hand-roll several low level
                features such as implementing `safeTransfer` functions. Most of the smart contract dev time was not spent writing the contracts but rather testing them.
                Test after test after test; Once it's deployed to Ethereum you can't do anymore bug fixes so it has to be 100% ready once it's launched.
            </div>

            <MinorTitle>The BizOps</MinorTitle>
            <div>
                I could go into a whole bunch on liasing with exchanges, influencers and community management but that seems a bit outside the scope of 
                the roles that I'm targeting so I'll spare the details. But the TL;DR of it is that there is a whole lot of shady stuff that goes on
                in crypto and almost everyone is out to get you; Having said that, if you can wade through it all, pretty much any service you want is 
                for sale.
            </div>
        </Container>
    );
};