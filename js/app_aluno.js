const getAluno = async () => {
  const apiURL = await fetch("http://localhost:3000/aluno")
  const aluno = await apiURL.json()

  const tbody = document.getElementById("tbody")

  aluno.forEach((conteudo) => {
    const dadoHTML = `
      <tr>
        <td>${conteudo.nome}</td>
        <td>${conteudo.turma}</td>
        <td>${conteudo.ativo}</td>
        <td class="tdButtonAcoes">
          <button onclick="editarAluno(${conteudo.id})" class="buttonAcoes">
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

getAluno()

  const deletarAluno = async (id) => {
    await fetch(`http://localhost:3000/aluno/${id}`, { method: "DELETE" })
    window.location = `index.html`
  }

  const editarAluno = (id) => {
    window.location = `edicao_aluno.html?id=${id}`
  }

  const pesquisarAluno = async (aluno) => {
    const apiURL = await fetch(`http://localhost:3000/aluno?nome_like=${aluno}`)
    const alunoPesquisa = await apiURL.json()

    const tbody = document.getElementById("tbody")

    alunoPesquisa.forEach((conteudo) => {
      const dadoHTML = `
        <tr>
          <td>${conteudo.nome}</td>
          <td>${conteudo.turma}</td>
          <td>${conteudo.ativo}</td>
          <td class="tdButtonAcoes">
            <button onclick="editarAluno(${conteudo.id})" class="buttonAcoes">
              <img src="../../../assets/img/editar.svg" class="imgAcoes"/>
            </button>

            <button onclick="deletarAluno(${conteudo.id})" class="buttonAcoes">
              <img src="../../../assets/img/remover.svg" class="imgAcoes"/>
            </button>
          </td>
        </tr>
      `
      tbody.innerHTML = dadoHTML
    })
  }

  const form = document.getElementById('form')

  form.addEventListener('submit', (event) =>{
    event.preventDefault()

    const inputPesquisa = document.getElementById('inputPesquisa').value

    pesquisarAluno(inputPesquisa)
  })
  