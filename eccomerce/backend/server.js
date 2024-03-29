const express = require("express");
const rateLimit = require("express-rate-limit");
const app = express();
const cors = require("cors");
const router = require("./routes");

// Limitador de taxa de 100 requisições a cada 30 minutos para todas as rotas
const limiter = rateLimit({
  windowMs: 30 * 60 * 1000, // 30 minutos
  max: 100, // limite de 100 requisições a cada 30 minutos
});

app.use(limiter);

app.use(express.json());
app.use(
  cors({
    origin: ["http://127.0.0.1:5501"], // Defina o domínio do seu site aqui, será o único que pode acessar sua API.
    methods: ["GET", "POST", "DELETE", "PUT"], // Métodos permitidos ao mecher nessa API
    allowedHeaders: ["Content-Type", "Authorization", "uid"], // Cabeçalhos permitidos
    credentials: false, // Habilita o envio de cookies de origens cruzadas(diferentes)
  })
);
app.use(router);

app.listen(3000, () => {
  console.log("Server rodando em: http://localhost:3000");
});
