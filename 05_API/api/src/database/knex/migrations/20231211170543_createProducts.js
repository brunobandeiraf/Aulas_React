exports.up = knex => knex.schema.createTable("products", table => {
    table.increments("id");
    table.text("name").notNullable();
    table.decimal("price", 6, 2).notNullable(); 

    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  });
  
  exports.down = knex => knex.schema.dropTable("products");