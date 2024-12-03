import { useState } from "react";

const useUpdateUserRole = () => {
  const [error, setError] = useState(null);

  const updateUserRole = async (userId, isAdmin) => {
    try {
      const response = await fetch(`/api/users/${userId}/admin`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isAdmin }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.error || "Error al actualizar el rol del usuario");
        return false;
      }

      setError(null);
      return true;
    } catch (err) {
      setError(err.message || "Error interno al intentar actualizar el rol");
      console.error("Error actualizando el rol del usuario:", err);
      return false;
    }
  };

  return {
    updateUserRole,
    error,
  };
};

export default useUpdateUserRole;
