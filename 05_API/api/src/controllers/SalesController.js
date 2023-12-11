class SalesController {
  index(request, response) {
    return response.json(["Venda 1", "Venda 2", "Venda 3", "Venda 4", "Venda 5", "Venda 6"]);
  }
}

module.exports = SalesController;