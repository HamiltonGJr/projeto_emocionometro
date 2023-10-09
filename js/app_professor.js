const getProfessor = async () => {
  const apiURL = await fetch("https://db-json-emocion.onrender.com/professor");
  const professor = await apiURL.json();

  const tbody = document.getElementById("tbody");

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
    `;

    tbody.innerHTML = tbody.innerHTML + dadoHTML;
  });
};

getProfessor();

const deletarProfessor = async (id) => {
  await fetch(`https://db-json-emocion.onrender.com/professor/${id}`, {
    method: "DELETE",
  });
  window.location = `index.html`;
};

const editarProfessor = (id) => {
  window.location = `edicao_professor.html?id=${id}`;
};

const pesquisarProfessor = async (professor) => {
  const apiURL = await fetch(
    `https://db-json-emocion.onrender.com/professor?nome_like=${professor}`
  );
  const professorPesquisa = await apiURL.json();

  const tbody = document.getElementById("tbody");

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
    `;
    tbody.innerHTML = dadoHTML;
  });
};

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputPesquisa = document.getElementById("inputPesquisa").value;

  pesquisarProfessor(inputPesquisa);
});
