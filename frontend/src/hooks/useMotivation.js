import { useState } from "react";

const useMotivation = () => {
  const [motivation, setMotivation] = useState("");
  const [error, setError] = useState(null);

  const getMotivationMessage = async () => {
    try {
      const response = await fetch("/api/mensaje/");
      const data = await response.json();

      if (response.ok) {
        setMotivation(data.mensaje);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError("Error al obtener el mensaje motivacional.");
    }
  };

  const updateMotivationMessage = async (message) => {
    try {
      const response = await fetch("/api/mensaje/", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();

      if (response.ok) {
        setMotivation(message);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError("Error al actualizar el mensaje motivacional.");
    }
  };

  return {
    motivation,
    error,
    getMotivationMessage,
    updateMotivationMessage,
  };
};

export default useMotivation;
