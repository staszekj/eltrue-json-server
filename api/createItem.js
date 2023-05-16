// @ts-check
const { faker } = require('@faker-js/faker');
const random = require('lodash.random');
const upperFirst = require('lodash.upperfirst');

const categories = [
  'Food',
  'Clothes',
  'Entertainment'
];

function createItem(name) {
  return {
    id: faker.datatype.uuid(),
    name:
      name ||
      faker.lorem.words(random(2, 4)).split(' ').map(upperFirst).join(' '),
    person: faker.lorem
      .words(random(1, 2))
      .split(' ')
      .map(upperFirst)
      .join(' '),
    category: categories[random(0, categories.length - 1)],
    amount: {
      current: random(0, 256),
      max: 256,
    },
    startDate: new Date().toISOString(),
  };
}

module.exports = createItem;
