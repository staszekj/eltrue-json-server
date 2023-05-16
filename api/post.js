const createItem = require('./createItem');

module.exports = (req, _res, next) => {
  if (req.method === 'POST') {
    req.body = createItem(req.body.name);
  }

  next();
};
