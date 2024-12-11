function status(request, response) {
  response.status(200).json({ chave: "alunos" });
}

export default status;
