import mongoose from "mongoose";

const mensajeSchema = mongoose.Schema({
  mensaje: {
    type: String,
    required: true,
  },
});

const Mensaje = mongoose.model("Mensaje", mensajeSchema);

export default Mensaje;
