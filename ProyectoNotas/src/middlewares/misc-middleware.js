import jwt from 'jsonwebtoken';

export function printDateMiddleware(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method}: ${req.path}`);
  next();
}

export function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Token de autenticación no proporcionado' });
  }

  jwt.verify(token, 'secret', (err, user) => {
    if (err) {
      console.error('Error al verificar el token:', err);
      if (err.name === 'TokenExpiredError') { 
        return res.status(403).json({ error: 'Token expirado' });
      }
      return res.status(403).json({ error: 'Token inválido' });
    }
    req.user = user;
    next();
  });
}

export function sortByMiddleware(validFields) {
  return (req, res, next) => {
    const sortBy = req.query.sortBy;
    const orderBy = req.query.orderBy === 'desc' ? -1 : 1;

    if (sortBy && validFields.includes(sortBy)) {
      req.sortedBy = {
        field: sortBy,
        order: orderBy,
      };
    }

    next();
  };
}

export function filterMiddleware(validFields) {
  return (req, res, next) => {
    let filters = {};

    for (const key in req.query) {
      if (validFields.includes(key)) {
        filters[key] = req.query[key];
      }
    }

    req.filters = filters;
    next();
  };
}

export function paginate() {
  return (req, res, next) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 5;

    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;

    req.pagination = {
      page,
      pageSize,
      startIndex,
      endIndex,
    };

    next();
  };
}