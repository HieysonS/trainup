import Mensaje from "../models/mensajeModel.js";

// Obtener el mensaje motivacional actual o crear uno si no existe
const getMotivationMessage = async (req, res) => {
  try {
    let mensaje = await Mensaje.findOne();

    // Si no existe un mensaje, lo creamos
    if (!mensaje) {
      mensaje = new Mensaje({
        mensaje: "¡Estás haciendo un gran trabajo, sigue adelante!", // Mensaje predeterminado
      });
      await mensaje.save(); // Guardamos el mensaje predeterminado
    }

    res.json({ mensaje: mensaje.mensaje });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener el mensaje motivacional." });
  }
};

// Actualizar el mensaje motivacional
const updateMotivationMessage = async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "El mensaje no puede estar vacío." });
  }

  try {
    let mensaje = await Mensaje.findOne();

    if (mensaje) {
      // Si ya existe un mensaje, lo actualizamos
      mensaje.mensaje = message;
    } else {
      // Si no existe, lo creamos
      mensaje = new Mensaje({ mensaje: message });
    }

    await mensaje.save();
    res
      .status(200)
      .json({ mensaje: "Mensaje motivacional actualizado con éxito." });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al actualizar el mensaje motivacional." });
  }
};

export { getMotivationMessage, updateMotivationMessage };
