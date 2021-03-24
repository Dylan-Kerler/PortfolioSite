import { useContext, useState } from "react";
import styled, { ThemeContext } from "styled-components";
import { Modal, ModalProps } from "../../../core/Modal";

const EmailContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.1);
    padding: 12px;
    border-radius: 3px;
    font-weight: bold;
    font-size: 42px;
    width: fit-content;

    transition: all 0.05s ease-out;

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

const Container = styled.div`
    display: grid;
    row-gap: 12px;
`;

const CopiedContainer = styled.div`
    padding: 6px;
    border: 1px solid ${({ theme }) => theme.colors.textSecondary};
    border-radius: 3px;
    position: absolute;
    color: ${({ theme }) => theme.colors.textSecondary};
    right: 0;
    bottom: -42px;

    @keyframes slideIn {
        0% {
            transform: translateY(-30%);
            opacity: 0;
        }

        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }   
    
    animation: 0.1s ease-out 0s 1 slideIn;
`;

const copyToClipboard = (text: string) => {
    const input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();
    const result = document.execCommand('copy');
    document.body.removeChild(input);
    return result;
};

export const EmailModal = (props: ModalProps) => {
    const [showCopied, setShowCopied] = useState(false);

    const toggleShowCopied = () => {
        setShowCopied(true);

        setTimeout(() => {
            setShowCopied(false);
        }, 2000);
    };

    return (
        <Modal {...props}>
            <Container>
                <div>Shoot me an email and I'll get back to you in a couple of hours</div>
                <EmailContainer 
                    onClick={() => {
                        toggleShowCopied();
                        copyToClipboard("dylankerler@gmail.com")
                    }}
                >
                    dylankerler@gmail.com
                </EmailContainer>

                {
                    showCopied &&
                        <CopiedContainer>
                            Copied to clipboard
                        </CopiedContainer>
                }
            </Container>
        </Modal>
    );
}