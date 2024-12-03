import { useState, useEffect } from "react";
import { useAuthContext } from "./useAuthContext";

const useGetRutinasNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const { user } = useAuthContext();

  const fetchRutinasNotifications = async () => {
    if (!user) return;

    try {
      const response = await fetch("/api/rutinas/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });

      const rutinasData = await response.json();

      if (response.ok) {
        const currentDate = new Date();
        const notificationsList = rutinasData
          .map((rutina) => {
            const nextSessionDate = new Date(rutina.fecha_inicio);
            nextSessionDate.setDate(
              nextSessionDate.getDate() + rutina.intervalo
            );

            // Comprobamos si la fecha actual coincide con la fecha de inicio o la próxima sesión
            const isToday =
              currentDate.toDateString() === nextSessionDate.toDateString() ||
              currentDate.toDateString() ===
                new Date(rutina.fecha_inicio).toDateString();

            if (isToday) {
              return {
                rutinaId: rutina._id,
                name: rutina.nombre,
                message: `Es hora de realizar la rutina ${rutina.nombre}!`,
              };
            } else {
              return null;
            }
          })
          .filter(Boolean); // Filtramos las notificaciones nulas

        setNotifications(notificationsList);
      } else {
        console.error("Error al obtener rutinas para notificaciones");
      }
    } catch (err) {
      console.error("Error al calcular las notificaciones", err);
    }
  };

  useEffect(() => {
    fetchRutinasNotifications();
  }, [user]);

  return { notifications };
};

export default useGetRutinasNotifications;
