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

  async find() {
    return this.categories;
  }

  async findOne(id) {
    return this.categories.find(category => category.id === id);
  }

  async create(data) {
    const newCategory = {
      id: faker.string.uuid(),
      ...data
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  async update(id, changes) {
    const index = this.categories.findIndex(category => category.id === id);
    if (index === -1) {
      throw new Error('Category not found');
    }
    const category = this.categories[index];
    this.categories[index] = {
      ...category,
      ...changes
    };
    return this.categories[index];
  }

  async delete(id) {
    const index = this.categories.findIndex(category => category.id === id);
    if (index === -1) {
      throw new Error('Category not found');
    }
    this.categories.splice(index, 1);
    return { id };
  }
}

module.exports = CategoriesService;
