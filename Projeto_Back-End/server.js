const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// conexão com o mongoDB
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/chamados",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() => console.log("Conectado ao MongoDB"))
.catch(err => console.error("Erro no MongoDB:", err ));

// Modelo (schema)

const Requisicao = mongoose.model("Requisicao", new mongoose.Schema({
    nome: String,   
    localizacao: String,   
    setor: String,   
    sla: String,   
    tipo: String,   
    descricao: String 
}));

//Rotas para receber dados

app.post("/requisicoes", async (req, res) => {
    try{
        const novaReq = new Requisicao(req.body);
        await novaReq.save();
        res.json({ message: "Requisição salva com sucesso!" });
    } catch (error){
        res.status(500).json({ error: "Erro ao salvar requisição" });

    }

});

app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

app.listen(3000, () => console.log(" Servidor rodando em http://localhost:3000"));
