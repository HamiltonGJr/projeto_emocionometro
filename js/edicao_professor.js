const formulario = document.getElementById('formulario')

let professorID = null

const getIdURL = () => {
  const paramString = window.location.search
  const params = new URLSearchParams(paramString)
  professorID = params.get('id')
}

const buscarProfessor = async () => {
  const response = await fetch(`https://db-json-emocion.onrender.com/professor/${professorID}`)
  const professor = await response.json()

  return professor
}

const carregarDadosFormulario = async (professor) => {
  document.getElementById('name').value = professor.nome
  document.getElementById('perfil').value = professor.perfil
  document.getElementById('disciplina').value = professor.disciplina
  document.getElementById('ativo').checked = professor.ativo
}

const carregarDados = async () => {
  getIdURL()

  const professor = await buscarProfessor()

  carregarDadosFormulario(professor)
}

const editarProfessor = async (professor) => {
  await fetch(`https://db-json-emocion.onrender.com/professor/${professorID}`,{
    method:'PUT',  
    headers:{
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(professor)
  })

  window.location.href = '../professor/index.html'
}

formulario.addEventListener('submit', (e) => {
  e.preventDefault()

  const nome = formulario.elements['name'].value
  const perfil = formulario.elements['perfil'].value
  const disciplina = formulario.elements['disciplina'].value
  const ativo = formulario.elements['ativo'].checked

  const professor = {
    nome,
    perfil,
    disciplina,
    ativo
  }

  editarProfessor(professor)
})

carregarDados()