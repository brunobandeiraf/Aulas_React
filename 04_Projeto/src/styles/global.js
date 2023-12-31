import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    //background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    //color: ${({ theme }) => theme.COLORS.WHITE};

    font-family: 'Open Sans', sans-serif;

    text-align: center;
    /*alinha todos os elementos ao centro*/
    margin: 0;
    /*padrão navegador põe 8px de margin*/

  }

  a {
    // Remover o underline dos link
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s; //criar transições suaves e animações
  }

  button:hover, a:hover {
    filter: brightness(0.9); // leve escurecida 
  }
`