import initializeFirebaseAuth from "../../firebaseConnection.js";
import cookies from "../cookies/cookies.js";

//O objetivo desta função é verificar se o usuário está autenticado e pegar o token atual dele.
//Está função deve ser chamada em todas as rotas necessárias para garantir que o usuário esteja autenticado.
const verifyIfUserIsAuth = async () => {
  const auth = await initializeFirebaseAuth();
  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const getAtualToken = await user.getIdToken(
            /*forceRefresh */
            true
          );
          cookies.setCookie("token", getAtualToken);

          const userParams = {
            atributes: user,
            token: cookies.getCookie("token"),
          };
          resolve(userParams);
        } catch (error) {
          console.error(
            "Erro ao obter token de autenticação em verifyIfUserIsAuth:",
            error
          );
          reject(error);
        }
      } else {
        console.error(
          "Erro ao verificar se o usuário existe em verifyIfUserIsAuth."
        );
        window.location.href = "signUpOrSignIn.html";
        reject();
      }
    });
  });
};

export default verifyIfUserIsAuth;
