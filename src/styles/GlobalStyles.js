import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }
    
    :root {
        font-size: 62.5%;
        --brand: #3B00EC;
        --bg-main: linear-gradient(90deg, #3B00EC 0%, #2A3154 100%);

        // dark theme
        --dark-bg-1: #1D2138;
        --dark-bg-2: #2A3154;
        --dark-bg-3: #191C30;
        --dark-text-1: #FCFFFF;
        --dark-text-2: #989BAC;
        --dark-bg-result: linear-gradient(360deg,#187cb1 0%,#3c407b 100%);
        
        // light theme
        --light-bg-1: #FFFFFF;
        --light-bg-2: #CECECE;
        --light-bg-3: #E9E9E9;
        --light-text-1: #181A2F;
        --light-text-2: #8A8A8A;
        --light-bg-result: linear-gradient(360deg,#f4e1ab 0%,#fac580 100%);
    }

    html, body, #root, .App {
        height: 100%;
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        overflow-x: hidden;
    }
    
    body {
        font-size: 1.6rem;
        font-family: 'Open Sans', sans-serif;
        background-color: var(--brand);
        background-image: var(--bg-main);
    }
`;
