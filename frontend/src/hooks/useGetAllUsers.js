import { useState } from "react";

const useGetAllUsers = () => {
  const [users, setUsers] = useState(null);

  const getAllUsers = async () => {
    try {
      const response = await fetch("/api/users/all");
      if (!response.ok) {
        const data = await response.json();
        setError(data.error || "Error al obtener users");
        return;
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setError(error.message);
      console.error("Error fetching users:", error);
    }
  };
  return {
    getAllUsers,
    users,
  };
};
export default useGetAllUsers;
