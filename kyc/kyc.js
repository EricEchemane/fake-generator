const fs = require('fs');
const { faker } = require('@faker-js/faker');

const currencies = ['VND', 'THB', 'RMB'];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

function generateData(n) {
  return Array.from({ length: n }, (_, i) => ({
    id: i + 1,
    login_name: faker.person.firstName(),
    full_name: faker.person.fullName(),
    currency: currencies[getRandomInt(0, 2)],
    document_status: getRandomInt(1, 4),
    created_at: getRandomDate(
      new Date(2023, 9, 1),
      new Date(2023, 9, 30)
    ).toISOString(),
    updated_at: faker.date.past().toISOString(),
    type: getRandomInt(1, 3),
  }));
}

const fakeData = generateData(200);
fs.writeFileSync('./kyc/kyc-data.json', JSON.stringify(fakeData));
