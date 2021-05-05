const faker = require('faker');
const data = [];
for (let i = 0; i < 50; i++) {
  data.push({
    first_name: escape(faker.name.firstName()),
    last_name: escape(faker.name.lastName()),
    email: escape(faker.internet.email()),
    created_at: escape(faker.date.past(1)),
    updated_at: escape(faker.date.past(1)),
  });
}

module.exports = { data };
