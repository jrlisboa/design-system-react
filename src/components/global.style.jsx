import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html, body, div, h1, h2, h3 {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }

    body {
        background: ${props => props.theme.colorPageBackground};
        font-size: ${props => props.theme.fontSizeBody};
        color: ${props => props.theme.colorPageBody};
        font-family: ${props => props.theme.fontFamilyBody};
        line-height: ${props => props.theme.lineHeightBody};
        letter-spacing: ${props => props.theme.spacingBody};
    }
`;

export default GlobalStyle;