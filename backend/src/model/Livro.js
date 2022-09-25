import mongoose from "mongoose";

const livrosSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: true },
  quantidade: { type: Number },
  valor: { type: Number },
});

const livros = mongoose.model("livros", livrosSchema);

export default livros;
