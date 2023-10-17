const getProfessor = async () => {
  const apiURL = await fetch("https://db-json-emocion.onrender.com/professor")
  const professor = await apiURL.json()

  const tbody = document.getElementById("tbody")

  professor.forEach((conteudo) => {

    const dadoHTML = `
      <tr>
        <td>${conteudo.nome}</td>
        <td>${conteudo.disciplina}</td>
        <td>${conteudo.perfil}</td>
        <td>
          ${
            conteudo.ativo
            ? "<img src='../../../assets/img/Toggle_Ativo.svg' class='imgButton' />"
            : "<img src='../../../assets/img/Toggle_Nao_Ativo.svg' class='imgButton' />"
          }
        </td>
        <td>          
          <button onclick="editarProfessor(${
            conteudo.id
          })" class="buttonAcoes" type="submit">
            <img src="../../../assets/img/editar.svg" class="imgAcoes"/>
          </button>

          <button onclick="deletarProfessor(${
            conteudo.id
          })" class="buttonAcoes" type="submit">
            <img src="../../../assets/img/remover.svg" class="imgAcoes"/>
          </button>
        </td>
      </tr>
    `

    tbody.innerHTML = tbody.innerHTML + dadoHTML
  })
}

getProfessor()

// DELETAR
const deletarProfessor = async (id) => {
  await fetch(`https://db-json-emocion.onrender.com/professor/${id}`, {
    method: "DELETE",
  })
  window.location = `index.html`
}

// REDIRECIONAR A EDIÇÃO
const editarProfessor = (id) => {
  window.location = `edicao_professor.html?id=${id}`
}

// PESQUISAR
const pesquisarProfessor = async (professor) => {
  const apiURL = await fetch(
    `https://db-json-emocion.onrender.com/professor?nome_like=${professor}`
  )
  const professorPesquisa = await apiURL.json()

  const tbody = document.getElementById("tbody")

  professorPesquisa.forEach((conteudo) => {
    const dadoHTML = `
    <tr>
      <td>${conteudo.nome}</td>
      <td>${conteudo.disciplina}</td>
      <td>${conteudo.perfil}</td>
      <td>${conteudo.ativo}</td>
      <td>          
        <button onclick="editarProfessor(${conteudo.id})" class="buttonAcoes" type="submit">
          <img src="../../../assets/img/editar.svg" class="imgAcoes"/>
        </button>

        <button onclick="deletarProfessor(${conteudo.id})" class="buttonAcoes" type="submit">
          <img src="../../../assets/img/remover.svg" class="imgAcoes"/>
        </button>
      </td>
    </tr>
    `
    tbody.innerHTML = dadoHTML
  })
}

const form = document.getElementById("form")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const inputPesquisa = document.getElementById("inputPesquisa").value

  pesquisarProfessor(inputPesquisa)
})

// ORDERNAR ALFABETICA
const ordernarProfessor = async (aluno) => {
  const apiURL = await fetch(`https://db-json-emocion.onrender.com/professor?_sort=nome&_order=`)
  const professorOrdernar = await apiURL.json()

  const tbody = document.getElementById("tbody")
  tbody.innerHTML = ''
  professorOrdernar.forEach((conteudo) => {
    const dadoHTML = `
    <tr>
      <td>${conteudo.nome}</td>
      <td>${conteudo.disciplina}</td>
      <td>${conteudo.perfil}</td>
      <td>
      ${
        conteudo.ativo
        ? "<img src='../../../assets/img/Toggle_Ativo.svg' class='imgButton' />"
        : "<img src='../../../assets/img/Toggle_Nao_Ativo.svg' class='imgButton' />"
      }
      </td>
        <td>          
          <button onclick="editarProfessor(${conteudo.id})" class="buttonAcoes" type="submit">
            <img src="../../../assets/img/editar.svg" class="imgAcoes"/>
          </button>

          <button onclick="deletarProfessor(${conteudo.id})" class="buttonAcoes" type="submit">
           <img src="../../../assets/img/remover.svg" class="imgAcoes"/>
          </button>
      </td>
    </tr>
    `

    tbody.innerHTML = tbody.innerHTML + dadoHTML
  })
}

// ORDERNAR DE ATIVO
const  ordernarProfessorAtivo= async (aluno) => {
  const apiURL = await fetch(`https://db-json-emocion.onrender.com/professor?_sort=ativo&_order=desc`)
  const professorOrdernarAtivo = await apiURL.json()

  const tbody = document.getElementById("tbody")
  tbody.innerHTML = ''
  professorOrdernarAtivo.forEach((conteudo) => {
    const dadoHTML = `
    <tr>
      <td>${conteudo.nome}</td>
      <td>${conteudo.disciplina}</td>
      <td>${conteudo.perfil}</td>
      <td>
      ${
        conteudo.ativo
        ? "<img src='../../../assets/img/Toggle_Ativo.svg' class='imgButton' />"
        : "<img src='../../../assets/img/Toggle_Nao_Ativo.svg' class='imgButton' />"
      }
      </td>
        <td>          
          <button onclick="editarProfessor(${conteudo.id})" class="buttonAcoes" type="submit">
            <img src="../../../assets/img/editar.svg" class="imgAcoes"/>
          </button>

          <button onclick="deletarProfessor(${conteudo.id})" class="buttonAcoes" type="submit">
           <img src="../../../assets/img/remover.svg" class="imgAcoes"/>
          </button>
      </td>
    </tr>
    `

    tbody.innerHTML = tbody.innerHTML + dadoHTML
  })
}
