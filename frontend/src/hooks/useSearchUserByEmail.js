import { useState } from "react";

const useSearchUserByEmail = () => {
  const [users, setUsers] = useState([]); // Cambiar de 'user' a 'users' para manejar múltiples resultados
  const [error, setError] = useState(null);

  const searchUserByEmail = async (email) => {
    try {
      const response = await fetch(`/api/users/search?email=${email}`);
      if (!response.ok) {
        const data = await response.json();
        setError(data.error || "Error al buscar usuarios");
        return;
      }

      const data = await response.json();
      setUsers(data); // Ahora se almacenan múltiples usuarios
      setError(null);
    } catch (error) {
      setError(error.message);
      console.error("Error buscando usuarios:", error);
    }
  };

  return {
    searchUserByEmail,
    users, // Cambiado a 'users'
    error,
  };
};

export default useSearchUserByEmail;
