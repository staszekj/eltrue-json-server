const createItem = require('./createItem');

module.exports = () => {
  const data = { items: [] };

  for (let i = 0; i < 50; i++) {
    data.items.push(createItem());
  }

  return data;
};
