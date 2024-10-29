import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ItemEjercicio2 from "./ItemEjercicio2";
import logoApp from "../assets/logo_trainup1.png";

const VerRutina = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [ejercicios, setEjercicios] = useState([]);
  const [error, setError] = useState("");

  const { _id: rutinaId, nombre, intensidad, intervalo } = location.state || {};

  useEffect(() => {
    if (!rutinaId) {
      navigate("/");
      return;
    }

    const fetchEjercicios = async () => {
      try {
        console.log(rutinaId);
        const response = await fetch(
          `/api/rutinaejercicios/rutina/${rutinaId}`
        );
        if (!response.ok) {
          throw new Error("Error al obtener los ejercicios de la rutina");
        }
        const data = await response.json();
        setEjercicios(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchEjercicios();
  }, [rutinaId, navigate]);

  return (
    <div
      className="container-fluid"
      style={{
        maxWidth: "400px",
      }}
    >
      <div className="d-flex justify-content-between align-items-center border-bottom p-3">
        <h2>Detalles de la Rutina</h2>
        <img
          src={logoApp}
          alt="Logo"
          style={{ width: "100px", height: "50px" }}
        />
      </div>
      <div className="border rounded p-3 mb-4 shadow">
        <p>
          <strong>Nombre:</strong> {nombre}
        </p>
        <p>
          <strong>Intensidad:</strong> {intensidad}
        </p>
        <p>
          <strong>Intervalo:</strong> cada {intervalo} días
        </p>
      </div>

      <h3>Ejercicios</h3>
      {error ? (
        <p className="text-danger">{error}</p>
      ) : (
        <ul className="list-group">
          {ejercicios.length > 0 ? (
            ejercicios.map((ejercicio, index) => (
              <ItemEjercicio2 key={index} ejercicio={ejercicio} />
            ))
          ) : (
            <li className="list-group-item text-muted">
              No hay ejercicios en esta rutina.
            </li>
          )}
        </ul>
      )}

      <button
        className="btn btn-primary mt-4"
        onClick={() => navigate("/runrutina")}
      >
        Iniciar Rutina
      </button>
    </div>
  );
};

export default VerRutina;
