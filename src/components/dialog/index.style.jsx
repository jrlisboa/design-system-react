import styled from 'styled-components';
const breakpoint = '600px';

export const DialogWrapperStyle = styled.div`
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.colorBackPageOverlap};
    display: flex;

    @media (min-width: ${breakpoint}) {
        justify-content: center;
    }
`;

export const DialogStyle = styled.div`
    width: 100%;
    align-self: flex-end;
    background-color: ${props => props.theme.colorPageBackground};
    padding: 0 ${props => props.theme.spaceMd};

    @media (min-width: ${breakpoint}) {
        width: 50%;
        align-self: center;
    }
`;

export const DialogHeaderStyle = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding-top: ${props => props.theme.spaceMd};
    margin-bottom: ${props => props.theme.spaceSm};
`;

export const DialogTitleStyle = styled.h2`
    font-size: ${props => props.theme.fontSizeTitle};
    color: ${props => props.theme.colorPageTitle};
    font-family: ${props => props.theme.fontFamilyTitle};
    line-height: ${props => props.theme.lineHeightTitle};
    letter-spacing: ${props => props.theme.spacingTitle};
`;

export const DialogCloseButtonStyle = styled.div`
    height: 100%;
    width: 32px;

    &:hover {
        cursor: pointer;
    }
`;

export const DialogContentStyle = styled.div`
    max-height: calc(80vh - ${props => props.theme.spaceLg});
    min-height: 20vh;
    padding-bottom: ${props => props.theme.spaceMd};
    overflow-y: auto;
    
    img {
        max-width: 100%;
        object-fit: cover;
    }
`;