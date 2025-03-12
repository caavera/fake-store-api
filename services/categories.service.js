const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

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
        description: faker.lorem.sentence(),
      });
    }
  }

  async find() {
    return this.categories;
  }

  async findOne(id) {
    const category = this.categories.find(cat => cat.id === id);
    if (!category) {
      throw boom.notFound('Category not found');
    }
    return category;
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
    const index = this.categories.findIndex(cat => cat.id === id);
    if (index === -1) {
      throw boom.notFound('Category not found');
    }
    const category = this.categories[index];
    this.categories[index] = {
      ...category,
      ...changes
    };
    return this.categories[index];
  }

  async delete(id) {
    const index = this.categories.findIndex(cat => cat.id === id);
    if (index === -1) {
      throw boom.notFound('Category not found');
    }
    this.categories.splice(index, 1);
    return { id };
  }
}

module.exports = CategoriesService;
