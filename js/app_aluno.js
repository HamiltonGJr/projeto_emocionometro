const getAluno = async () => {
  const apiURL = await fetch('http://localhost:3000/aluno')
  const aluno = await apiURL.json()
  console.log(aluno)
}