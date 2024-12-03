export const requireAdmin = (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    return res
      .status(403)
      .json({ error: "Acceso denegado: No eres administrador." });
  }
  next();
};
