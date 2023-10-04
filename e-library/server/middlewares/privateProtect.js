function requireUserRole(req, res, next) {
    if (req.session.role === "user") {
      return next();
    }
    return res.status(403).json({ error: "Access denied. User role required." });
  }
  
  function requireAdminRole(req, res, next) {
    if (req.session.role === "admin") {
      return next();
    }
    return res.status(403).json({ error: "Access denied. Admin role required." });
  }

export {requireAdminRole, requireUserRole}