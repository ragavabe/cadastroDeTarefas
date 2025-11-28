let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

if (window.location.pathname.includes("cadastro.html")) {
  document
    .getElementById("formTarefa")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      let prioridade = document.getElementById("prioridade").value;
      let descricao = document.getElementById("descricao").value;
      let local = document.getElementById("local").value;
      let matricula = document.getElementById("matricula").value;
      let dataLimite = document.getElementById("dataLimite").value;
      let recursos = document.getElementById("recursosNecessarios").value;

      if (
        prioridade === "" ||
        descricao === "" ||
        local === "" ||
        matricula === "" ||
        dataLimite === ""
      ) {
        alert("Preencha todos os campos obrigatórios.");
        return;
      }

      let recursosArray = recursos ? recursos.split(",") : [];

      let tarefa = {
        prioridade: prioridade,
        descricao: descricao,
        local: local,
        recursosNecessarios: recursosArray,
        dataLimite: dataLimite,
        matricula: Number(matricula),
      };

      tarefas.push(tarefa);

      localStorage.setItem("tarefas", JSON.stringify(tarefas));

      window.location.href = "index.html";
    });
}

if (
  window.location.pathname.includes("index.html") ||
  window.location.pathname.endsWith("/")
) {
  let container = document.getElementById("containerTarefas");

  if (tarefas.length === 0) {
    container.innerHTML = "<p>Nenhuma tarefa cadastrada</p>";
  } else {
    let tabela = "<table border='1' cellpadding='6'>";
    tabela += `
            <tr>
                <th>Prioridade</th>
                <th>Descrição</th>
                <th>Local</th>
                <th>Recursos</th>
                <th>Data Limite</th>
                <th>Matrícula</th>
            </tr>
        `;

    tarefas.forEach(function (t) {
      let cor = t.prioridade === "Urgente" ? "red" : "black";

      tabela += `
                <tr style="color: ${cor}">
                    <td>${t.prioridade}</td>
                    <td>${t.descricao}</td>
                    <td>${t.local}</td>
                    <td>${t.recursosNecessarios.join(", ")}</td>
                    <td>${t.dataLimite}</td>
                    <td>${t.matricula}</td>
                </tr>
            `;
    });

    tabela += "</table>";
    container.innerHTML = tabela;
  }
  var hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  var dataEscolhida = new Date(data);
  dataEscolhida.setHours(0, 0, 0, 0);

  if (dataEscolhida < hoje) {
    alert("A data escolhida já passou!");
  }
  }
}
