import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminUsers from "./AdminUsers";
import CreateExercise from "./CreateExercise";
import UpdateMotivation from "./UpdateMotivation";
import logoApp from "../../assets/logo_trainup1.png";

function AdminDashboard() {
  const [section, setSection] = useState("users");
  const navigate = useNavigate();

  const handleHomeRedirect = () => {
    navigate("/");
  };

  return (
    <div className="container py-4">
      {/* Header con Logo Home */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <button
          onClick={handleHomeRedirect}
          style={{ background: "none", border: "none" }}
        >
          <img
            src={logoApp}
            alt="Logo"
            style={{ width: "160px", height: "80px", cursor: "pointer" }}
          />
        </button>
        <h2>Dashboard de Administrador</h2>
      </div>

      {/* Botones de Navegación para el Dashboard */}
      <div className="btn-group my-3">
        <button
          onClick={() => setSection("users")}
          className={`btn ${
            section === "users" ? "btn-primary" : "btn-outline-primary"
          } mx-2`}
          style={{ fontSize: "16px", padding: "10px 20px" }}
        >
          Gestión de Roles
        </button>
        <button
          onClick={() => setSection("exercises")}
          className={`btn ${
            section === "exercises" ? "btn-primary" : "btn-outline-primary"
          } mx-2`}
          style={{ fontSize: "16px", padding: "10px 20px" }}
        >
          Crear Ejercicios
        </button>
        <button
          onClick={() => setSection("motivation")}
          className={`btn ${
            section === "motivation" ? "btn-primary" : "btn-outline-primary"
          } mx-2`}
          style={{ fontSize: "16px", padding: "10px 20px" }}
        >
          Mensaje Motivacional
        </button>
      </div>

      {/* Renderizar la sección seleccionada */}
      {section === "users" && <AdminUsers />}
      {section === "exercises" && <CreateExercise />}
      {section === "motivation" && <UpdateMotivation />}
    </div>
  );
}

export default AdminDashboard;
