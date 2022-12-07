import styled from 'styled-components';

export const ExamplePage = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ExampleButtonStyle = styled.div`
    padding: 14px 22px;
    background-color: black;
    color: white;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
    transition: 300ms;

    &:hover {
        background-color: #555555;
    }
`;