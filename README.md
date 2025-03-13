# Fake Store API

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/API-RESTful-blue?style=for-the-badge">
</p>

This is a RESTful API built with Node.js and Express. It simulates an online store with products, users, and categories, dynamically generated using Faker.js.

## 🌐 Live Demo

You can test the API directly on Vercel:

- **Base URL**: [`https://fake-store-api-brown.vercel.app/api/v1/`](https://fake-store-api-brown.vercel.app/api/v1/)
- **Products**: [`https://fake-store-api-brown.vercel.app/api/v1/products`](https://fake-store-api-brown.vercel.app/api/v1/products)
- **Users**: [`https://fake-store-api-brown.vercel.app/api/v1/users`](https://fake-store-api-brown.vercel.app/api/v1/users)
- **Categories**: [`https://fake-store-api-brown.vercel.app/api/v1/categories`](https://fake-store-api-brown.vercel.app/api/v1/categories)

## 🔧 Technologies Used

<ul>
  <li><strong>Node.js</strong> and <strong>Express</strong> for the server.</li>
  <li><strong>@faker-js/faker</strong> for generating fake data.</li>
  <li><strong>Joi</strong> for data validation.</li>
  <li><strong>Boom</strong> for error handling.</li>
  <li><strong>Helmet</strong> for HTTP security headers.</li>
  <li><strong>Cors</strong> to allow access from any origin.</li>
  <li><strong>ESLint</strong> and <strong>Prettier</strong> for code formatting and linting.</li>
</ul>

## 🛠 Middlewares

<ul>
  <li><strong>Error handling</strong> with Boom.</li>
  <li><strong>Data validation</strong> with Joi.</li>
</ul>

## 📌 Endpoints

<details>
  <summary><strong>📦 Products</strong> (<a href="https://fake-store-api-brown.vercel.app/api/v1/products"><code>/api/v1/products</code></a>)</summary>
  <ul>
    <li><code>GET /</code> → Get all products.</li>
    <li><code>GET /:id</code> → Get a product by ID.</li>
    <li><code>POST /</code> → Create a new product.</li>
    <li><code>PATCH /:id</code> → Update a product by ID.</li>
    <li><code>DELETE /:id</code> → Delete a product by ID.</li>
  </ul>
</details>

<details>
  <summary><strong>👤 Users</strong> (<a href="https://fake-store-api-brown.vercel.app/api/v1/users"><code>/api/v1/users</code></a>)</summary>
  <ul>
    <li><code>GET /</code> → Get all users.</li>
    <li><code>GET /:id</code> → Get a user by ID.</li>
    <li><code>POST /</code> → Create a new user.</li>
    <li><code>PATCH /:id</code> → Update a user by ID.</li>
    <li><code>DELETE /:id</code> → Delete a user by ID.</li>
  </ul>
</details>

<details>
  <summary><strong>📂 Categories</strong> (<a href="https://fake-store-api-brown.vercel.app/api/v1/categories"><code>/api/v1/categories</code></a>)</summary>
  <ul>
    <li><code>GET /</code> → Get all categories.</li>
    <li><code>GET /:id</code> → Get a category by ID.</li>
    <li><code>POST /</code> → Create a new category.</li>
    <li><code>PATCH /:id</code> → Update a category by ID.</li>
    <li><code>DELETE /:id</code> → Delete a category by ID.</li>
  </ul>
</details>

## 🚀 Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/caavera/fake-store-api.git
   cd fake-store-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

   The API will run at `http://localhost:3000`.

## 📝 Author

Developed by **Carlos Vera**  
<a href="https://github.com/caavera/fake-store-api"><img src="https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github"></a>
