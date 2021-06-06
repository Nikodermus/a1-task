import { createGlobalStyle } from 'styled-components';

const BaseStyle = createGlobalStyle`
    canvas {
        display:  none !important;
    }

    img,
    svg,
    video{
        object-fit: contain;
    }

    body {
        background: white;
    }
`;

export default BaseStyle;
