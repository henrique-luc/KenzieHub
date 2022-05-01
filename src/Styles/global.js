import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0 ;
    }

    body {
        font-family: 'Inter', sans-serif;
        background-color: var(--grey-4)
    }

    a {
        text-decoration: none
    }

    button {
        cursor:pointer;
    }

    :root {
        --color-primary: #ff577f;
        --color-primary-focus: #ff427f;
        --color-primary-negative: #59323f;
        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343b41 ;
        --grey-1: #868e96;
        --grey-0: #f8f9fa;  
        --success: #3fe864;
        --negative: #e83f5b;  
        --white-1: #fff;

        --logo: 1.25rem;
        --title: 1rem;
        --headline: 0.75rem;
        
        --radios-inputs-buttons: 0.25rem;
        
    }

`;
