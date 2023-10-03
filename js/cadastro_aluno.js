const formulario = document.getElementById('formulario')

const cadastrarAluno = async (aluno) => {
  await fetch('http://localhost:3000/aluno',{
    method:'POST',  
    headers:{
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(aluno)
  })

  window.location.href = '../aluno/index.html'
}

formulario.addEventListener('submit', (e) => {
  e.preventDefault()

  const nome = formulario.elements['name'].value
  const turma = formulario.elements['turma'].value
  const ativo = formulario.elements['ativo'].value

  const aluno = {
    nome,
    turma,
    ativo
  }

  cadastrarAluno(aluno)
})