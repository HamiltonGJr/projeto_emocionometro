const formulario = document.getElementById('formulario')

const cadastrarProfessor = async (professor) => {
  await fetch('https://db-json-emocion.onrender.com/professor',{
    method:'POST',  
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
  let ativo = formulario.elements['ativo'].checked

  const professor = {
    nome,
    perfil,
    disciplina,
    ativo
  }

  cadastrarProfessor(professor)
})