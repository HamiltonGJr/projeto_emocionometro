const formulario = document.getElementById("formulario")

let alunoID = null

const getIdURL = () => {
  const paramString = window.location.search
  const params = new URLSearchParams(paramString)
  alunoID = params.get("id")
}

const buscarAluno = async () => {
  const response = await fetch(`https://db-json-emocion.onrender.com/aluno/${alunoID}`)
  const aluno = await response.json()

  return aluno
}

const carregarDadosFormulario = async (aluno) => {
  document.getElementById("name").value = aluno.nome
  document.getElementById("turma").value = aluno.turma
  document.getElementById("ativo").value = aluno.ativo
}

const carregarDados = async () => {
  getIdURL()

  const aluno = await buscarAluno()

  carregarDadosFormulario(aluno)
}

const editarAluno = async (aluno) => {
  await fetch(`https://db-json-emocion.onrender.com/aluno/${alunoID}`, {
    method: "PUT",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(aluno),
  })

  window.location.href = "../aluno/index.html"
}

formulario.addEventListener("submit", (e) => {
  e.preventDefault()

  const nome = formulario.elements["name"].value
  const turma = formulario.elements["turma"].value
  const ativo = formulario.elements["ativo"].checked

  const aluno = {
    nome,
    turma,
    ativo,
  }

  editarAluno(aluno)
})

carregarDados()
