const { faker } = require('@faker-js/faker');

class CategoriesService {
  constructor() {
    this.categories = [];
    this.generate();
  }

  generate() {
    const limit = 20;
    for (let i = 0; i < limit; i++) {
      this.categories.push({
        id: faker.string.uuid(),
        name: faker.commerce.department(),
        description: faker.lorem.sentence()
      });
    }
  }

  find() {
    return this.categories;
  }

  findOne(id) {
    return this.categories.find(category => category.id === id);
  }

  create() {}

  update() {}

  delete() {}
}

module.exports = CategoriesService;
