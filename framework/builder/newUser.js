let faker = require('faker');

class PersonBuilder {
    constructor() {
    }

  addUserName() {
    this.userName = faker.internet.userName();
    return this;
  }
  addEmail() {
    this.email = faker.internet.email();
    return this;
  }
  addPassword() {
    this.password = faker.internet.password();
    return this;
  }
  generate() {
    const fields = Object.getOwnPropertyNames(this);
    const data = {};
    fields.forEach((fieldName) => {
      if (this[fieldName] && typeof this[fieldName] !== 'function') {
        data[fieldName] = this[fieldName];
      }
    });
    return data;
  };
};

module.exports = PersonBuilder;
