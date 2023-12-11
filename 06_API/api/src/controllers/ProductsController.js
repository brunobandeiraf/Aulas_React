const knex = require("../database/knex");

class ProductsController {
  async index(request, response) {
    try {
      const products = await knex("products").select("*");

      if (products.length === 0) 
        return response.json({ message: "Nenhum produto cadastrado." });

      return response.json(products);

    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Erro ao recuperar produtos." });
    }
  }

  async create(request, response) {
    try {
      const { name, price } = request.body;

      // Insere o produto no banco de dados
      await knex("products").insert({ name, price });

      return response.status(201).json();

    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Erro ao criar produto." });
    }
  }
}
  
module.exports = ProductsController;