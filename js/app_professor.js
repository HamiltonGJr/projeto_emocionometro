const getProfessor = async () => {
  const apiURL = await fetch('http://localhost:3000/professor')
  const professor = await apiURL.json()

  const tbody = document.getElementById('tbody')

  professor.forEach((conteudo) => {
    const dadoHTML = `
      <tr>
        <td>${conteudo.nome}</td>
        <td>${conteudo.disciplina}</td>
        <td>${conteudo.perfil}</td>
        <td>${conteudo.ativo}</td>
        <td>          
          <button class="buttonAcoes">
            <img src="../../../assets/img/editar.svg" class="imgAcoes"/>
          </button>

          <button onclick="deletarProfessor(${conteudo.id})" class="buttonAcoes">
            <img src="../../../assets/img/remover.svg" class="imgAcoes"/>
          </button>
        </td>
      </tr>
    `

    tbody.innerHTML = tbody.innerHTML + dadoHTML
  })
}

const deletarProfessor = async(id) => {
  await fetch(`http://localhost:3000/professor/${id}`,{method:'DELETE'})
  getProfessor()
}
