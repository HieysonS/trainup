import React, { useState, useEffect } from "react";
import useMotivation from "../../hooks/useMotivation";

function UpdateMotivation() {
  const { motivation, error, getMotivationMessage, updateMotivationMessage } =
    useMotivation();
  const [message, setMessage] = useState(motivation || "");
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal

  useEffect(() => {
    getMotivationMessage(); // Obtener el mensaje cuando el componente se monta
  }, [getMotivationMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message) {
      await updateMotivationMessage(message);
      setShowModal(true); // Mostrar el modal cuando el mensaje es actualizado
      setMessage(""); // Limpiar el campo de mensaje después de actualizar
    }
  };

  const handleCloseModal = () => {
    setShowModal(false); // Cerrar el modal cuando el usuario haga clic en "OK"
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">
        <h3>Actualizar Mensaje Motivacional</h3>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={motivation}
          rows="4"
          className="form-control"
        />
        <button type="submit" className="btn btn-primary mt-3">
          Actualizar
        </button>
        {error && <p className="text-danger mt-3">{error}</p>}
      </form>

      {/* Modal de confirmación */}
      {showModal && (
        <div
          className="modal show"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  Mensaje Motivacional Actualizado
                </h5>
              </div>
              <div className="modal-body">
                <p>Mensaje motivacional actualizado con éxito.</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleCloseModal}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UpdateMotivation;
