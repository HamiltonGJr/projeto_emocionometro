const getAluno = async () => {
  const apiURL = await fetch("https://db-json-emocion.onrender.com/aluno")
  const aluno = await apiURL.json()

  const tbody = document.getElementById("tbody")

  aluno.forEach((conteudo) => {
    const dadoHTML = `
      <tr>
        <td>${conteudo.nome}</td>
        <td>${conteudo.turma}</td>
        <td>
          ${
            conteudo.ativo
            ? "<img src='../../../assets/img/Toggle_Ativo.svg' class='imgButton' />"
            : "<img src='../../../assets/img/Toggle_Nao_Ativo.svg' class='imgButton' />"
          }
        </td>
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
    await fetch(`https://db-json-emocion.onrender.com/aluno/${id}`, { method: "DELETE" })
    window.location = `index.html`
  }

  const editarAluno = (id) => {
    window.location = `edicao_aluno.html?id=${id}`
  }

  const pesquisarAluno = async (aluno) => {
    const apiURL = await fetch(`https://db-json-emocion.onrender.com/aluno?nome_like=${aluno}`)
    const alunoPesquisa = await apiURL.json()

    console.log(alunoPesquisa)

    const tbody = document.getElementById("tbody")
    tbody.innerHTML = ''
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
      tbody.innerHTML = tbody.innerHTML + dadoHTML
    })
  }

  const form = document.getElementById('form')

  form.addEventListener('submit', (event) =>{
    event.preventDefault()

    const inputPesquisa = document.getElementById('inputPesquisa').value

    pesquisarAluno(inputPesquisa)
  })
  