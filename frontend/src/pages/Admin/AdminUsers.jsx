import React, { useState } from "react";
import useGetAllUsers from "../../hooks/useGetAllUsers";
import useSearchUserByEmail from "../../hooks/useSearchUserByEmail";
import useUpdateUserRole from "../../hooks/useUpdateUserRole.js";

const AdminUsers = () => {
  const { getAllUsers, users } = useGetAllUsers();
  const {
    searchUserByEmail,
    users: searchResults,
    error: searchError,
  } = useSearchUserByEmail();
  const { updateUserRole } = useUpdateUserRole();

  const [email, setEmail] = useState("");
  const [roleUpdateStatus, setRoleUpdateStatus] = useState(null);

  const handleSearch = () => {
    if (email.trim()) {
      searchUserByEmail(email);
    }
  };

  const handleUpdateRole = async (id, isAdmin) => {
    const success = await updateUserRole(id, isAdmin);
    if (success) {
      setRoleUpdateStatus(
        `El usuario con ID ${id} ahora tiene isAdmin: ${isAdmin}.`
      );
      getAllUsers();
    } else {
      setRoleUpdateStatus(
        `Error al actualizar el rol del usuario con ID ${id}.`
      );
    }
    handleSearch();
  };

  return (
    <div className="container py-4 border p-4 rounded shadow-sm">
      <h2>Gestión de Usuarios</h2>
      <div className="mb-4">
        <h5>Buscar Usuario por Email</h5>
        <input
          type="email"
          placeholder="Ingrese email del usuario"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control mb-2"
        />
        <button onClick={handleSearch} className="btn btn-primary">
          Buscar
        </button>
      </div>
      {searchError && <p className="text-danger">{searchError}</p>}
      {searchResults && searchResults.length > 0 ? (
        searchResults.map((user) => (
          <div key={user._id} className="border rounded p-3 mb-4 shadow-sm">
            <p>
              <strong>Nombre:</strong> {user.username}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>isAdmin:</strong> {user.isAdmin ? "Sí" : "No"}
            </p>
            <button
              onClick={() => handleUpdateRole(user._id, !user.isAdmin)}
              className={`btn ${user.isAdmin ? "btn-danger" : "btn-success"}`}
            >
              {user.isAdmin ? "Revocar Admin" : "Promover a Admin"}
            </button>
          </div>
        ))
      ) : (
        <p>No se encontraron usuarios.</p>
      )}

      <h5>Lista de Todos los Usuarios</h5>
      <button onClick={getAllUsers} className="btn btn-secondary mb-3">
        Cargar Usuarios
      </button>
      {users &&
        users.map((u) => (
          <div key={u._id} className="border rounded p-3 mb-2">
            <p>
              <strong>Nombre:</strong> {u.username}
            </p>
            <p>
              <strong>Email:</strong> {u.email}
            </p>
            <p>
              <strong>isAdmin:</strong> {u.isAdmin ? "Sí" : "No"}
            </p>
            <button
              onClick={() => handleUpdateRole(u._id, !u.isAdmin)}
              className={`btn ${u.isAdmin ? "btn-danger" : "btn-success"}`}
            >
              {u.isAdmin ? "Revocar Admin" : "Promover a Admin"}
            </button>
          </div>
        ))}
      {roleUpdateStatus && <p className="mt-3">{roleUpdateStatus}</p>}
    </div>
  );
};

export default AdminUsers;
