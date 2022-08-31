import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
  font-size: 62.5%;
  }


  body {
    background-color: ${({ theme }) => theme.COLORS.BLACK_700};
    color: ${({ theme }) => theme.COLORS.WHITE};


    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Roboto Slab', sans-serif;
    font-size: 1.6rem;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }



`
