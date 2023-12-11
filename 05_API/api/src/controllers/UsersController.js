const knex = require("../database/knex");
const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError");

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;

    const checkUserExists = await knex("users").where({ email });

    if (checkUserExists.length > 0) {
      throw new AppError("Este e-mail já está em uso.");
    }

    try{

      const hashedPassword = await hash(password, 8);

      await knex("users").insert({ name, email, password: hashedPassword });

      // Recupera o usuário recém-cadastrado
      const user = await knex("users").where({ email }).first();

      return response.status(201).json(user);

      //return response.status(201).json();
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Erro ao cadastrar usuários." });
    }
  }

  async getAllUsers(request, response) {
    try {

      const users = await knex("users").select("*");
      
      if (users.length === 0) 
        return response.json({ message: "Nenhum usuário cadastrado." });

      return response.json(users);

    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Erro ao recuperar usuários." });
    }
  }
  


}

module.exports = UsersController;