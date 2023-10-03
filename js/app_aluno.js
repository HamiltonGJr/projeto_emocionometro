const getAluno = async () => {
  const apiURL = await fetch('http://localhost:3000/aluno')
  const aluno = await apiURL.json()

  const tbody = document.getElementById('tbody')

  aluno.forEach((conteudo) => {
    const dadoHTML = `
      <tr>
        <td>${conteudo.nome}</td>
        <td>${conteudo.turma}</td>
        <td>${conteudo.ativo}</td>
        <td class="tdButtonAcoes">
          <button class="buttonAcoes">
            <img src="../../../assets/img/editar.svg" class="imgAcoes"/>
          </button>

          <button onclick="deletarAluno(${conteudo.id})" class="buttonAcoes">
            <img src="../../../assets/img/remover.svg" class="imgAcoes"/>
          </button>
        </td>
      </tr>
    `
  tbody.innerHTML = tbody.innerHTML + dadoHTML
})
}

const deletarAluno = async(id) => {
  await fetch(`http://localhost:3000/aluno/${id}`,{method:'DELETE'})
  getAluno()
}
