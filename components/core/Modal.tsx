import ReactDOM from "react-dom";
import styled from "styled-components";

const ModalContainer = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    height: 100%;
    background-color: rgba(0,0,0, 0.7);

    > div {
        background-color: ${({ theme }) => theme.colors.backgroundColor};
        padding: 24px;
        height: fit-content;
        width: 300px;
    }
`;

interface Props {
    isOpen: boolean,
    onClose: () => void,
    children: React.ReactNode
};

export const Modal = ({ isOpen, onClose, children }: Props) => {
    return isOpen ?
        ReactDOM.createPortal(
            <ModalContainer>
                <div>
                    {children}
                </div>
            </ModalContainer>,
            document.getElementById("root") as HTMLElement
        )
    : 
        <></>;
};