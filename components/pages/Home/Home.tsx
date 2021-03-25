import { useState } from "react";
import Select from "react-select";
import styled from "styled-components";
import { Carousel } from "./Carousel/Carousel";
import { Summary } from "./Summary/Summary"

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;

    *::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }

    #carousel {
        margin-right: 120px;
        position: relative;
    }
`;

export const Home = () => {
    const [selectedLanguage, setSelectedLanguage] = useState({ label: "All", value: "all" });

    return (
        <Container>
            <Summary/>

            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", columnGap: 18 }}>
                <div style={{ marginTop: 24, display: "grid", rowGap: 12, height: "fit-content", width: 150 }}>
                    <div>Language to show</div>
                    <Select
                        onChange={e => setSelectedLanguage(e as { label: string, value: string})}
                        value={selectedLanguage}
                        options={[
                            { value: "all", label: "All" },
                            { value: "javascript", label: "Javascript" },
                            { value: "go", label: "Go" },
                            { value: "rust", label: "Rust" },
                            { value: "c++", label: "C++" },
                            { value: "solidity", label: "Solidity" },
                        ]}
                    />
                </div>
                <Carousel selectedLanguage={selectedLanguage.value}/>
            </div>
        </Container>
    );
};