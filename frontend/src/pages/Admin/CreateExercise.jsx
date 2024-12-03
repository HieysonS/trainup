import React, { useState } from "react";

function CreateExercise() {
  const [nombre, setNombre] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [link, setLink] = useState("");
  const [tipo, setTipo] = useState(true); // true para "Ejercicio de tiempo", false para "Ejercicio de repeticiones"
  const [showModal, setShowModal] = useState(false); // Controlar la visibilidad del modal
  const [modalMessage, setModalMessage] = useState(""); // Mensaje del modal

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!objetivo) {
      alert("Por favor selecciona un objetivo válido.");
      return;
    }

    // Enviar los datos al servidor
    await fetch("/api/ejercicios/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, objetivo, link, tipo }),
    });

    // Mostrar el modal con el mensaje de éxito
    setModalMessage(`Ejercicio "${nombre}" creado con éxito.`);
    setShowModal(true); // Mostrar el modal

    // Limpiar los campos después de enviar el formulario
    setNombre("");
    setObjetivo("");
    setLink("");
    setTipo(true); // Resetea el tipo a "Ejercicio de tiempo"
  };

  const handleCloseModal = () => {
    setShowModal(false); // Cerrar el modal
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">
        <h3 className="mb-4">Crear Ejercicio</h3>

        {/* Nombre del Ejercicio */}
        <div className="mb-3">
          <label className="form-label">Nombre:</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre del Ejercicio"
            required
          />
        </div>

        {/* Objetivo */}
        <div className="mb-3">
          <label className="form-label">Objetivo:</label>
          <select
            className="form-select"
            value={objetivo}
            onChange={(e) => setObjetivo(e.target.value)}
            required
          >
            <option value="" disabled>
              Selecciona un objetivo
            </option>
            <option value="Rutina para Perder Peso">
              Rutina para Perder Peso
            </option>
            <option value="Rutina para Tonificarte">
              Rutina para Tonificarte
            </option>
            <option value="Rutina de Volumen">Rutina de Volumen</option>
          </select>
        </div>

        {/* Tipo (Tiempo o Repeticiones) */}
        <div className="mb-3">
          <label className="form-label">Tipo de Ejercicio:</label>
          <select
            className="form-select"
            value={tipo}
            onChange={(e) => setTipo(e.target.value === "true")}
            required
          >
            <option value="true">Ejercicio de Tiempo</option>
            <option value="false">Ejercicio de Repeticiones</option>
          </select>
        </div>

        {/* Enlace */}
        <div className="mb-3">
          <label className="form-label">Enlace de Imagen/GIF:</label>
          <input
            type="url"
            className="form-control"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Enlace de Imagen o GIF"
            required
          />
        </div>

        {/* Botón para crear */}
        <button type="submit" className="btn btn-primary">
          Crear
        </button>
      </form>

      {/* Modal personalizado */}
      {showModal && (
        <div
          className="modal-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "center",
              width: "300px",
            }}
          >
            <h5>Éxito</h5>
            <p>{modalMessage}</p>
            <button
              className="btn btn-secondary"
              onClick={handleCloseModal}
              style={{
                padding: "10px 20px",
                marginTop: "10px",
              }}
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateExercise;
