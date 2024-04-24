import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@charset "UTF-8";

// Resetando estilos padrão
* {
  padding: 0;
  margin: 0;
}

//Definindo fontes
@font-face {
  font-family: "ContrailOne";
  src: url("./assets/fonts/ContrailOne-Regular_texto.ttf") format("truetype");
}

@font-face {
  font-family: "Gagalin-Regular";
  src: url("./assets/fonts/Gagalin-Regular_destaque.otf") format("opentype");
}

@font-face {
  font-family: "Montserrat-Regular";
  src: url("./assets/fonts/Montserrat-Regular_titulo.ttf") format("truetype");
}

@font-face {
  font-family: "Sacramento-Regular";
  src: url("./assets/fonts/Sacramento-Regular_produtos.ttf") format("truetype");
}

//Definindo variáveis de cor e fonte
:root {
  --text-color-white: #fff;
  --green-strength: #374e0b;
  --green-light: #5a7813;
  --blue-strength: #4d6a92;
  --blue-light: #348db8;
  --yellow-strength: #f1c388;

  --font-normal-text: "ContrailOne";
  --font-destaque-text: "Gagalin-Regular";
  --font-titulo: "Montserrat-Regular";
  --font-produtos-name: "Sacramento-Regular";
}

//Definindo espaçamento por conta do header ser position fixed
body {
    overflow-x: hidden;
    padding-top: 125px;
  }

//Definindo fundo para todas as páginas.
main {
    background-image: url("../assets/images/background/folhas_fundo.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
}

//Definindo estilo Padrão para icones do Google
.material-symbols-outlined {
    margin: 0.2rem;
    color: var(--yellow-strength);
  }
`;

export default GlobalStyle;
