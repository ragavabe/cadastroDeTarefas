document.addEventListener("DOMContentLoaded", () => {

    let recursos = [];

    const inputRecurso = document.getElementById("inputRecurso");
    const botaoAdd = document.getElementById("addRecurso");
    const listaRecursos = document.getElementById("listaRecursos");

    if (botaoAdd) {
        botaoAdd.addEventListener("click", () => {
            const texto = inputRecurso.value.trim();
            if (texto === "") return;

            recursos.push(texto);

            const li = document.createElement("li");
            li.textContent = texto;

            listaRecursos.appendChild(li);
            inputRecurso.value = "";
        });
    }

    const form = document.getElementById("formTarefa");

    if (form) {
        form.addEventListener("submit", e => {
            e.preventDefault();

            const tarefa = {
                descricao: document.getElementById("descricao").value,
                local: document.getElementById("local").value,
                matricula: document.getElementById("matricula").value,
                prioridade: document.getElementById("prioridade").value,
                dataLimite: document.getElementById("dataLimite").value,
                recursosNecessarios: recursos
            };

            const lista = JSON.parse(localStorage.getItem("tarefas")) || [];
            lista.push(tarefa);

            localStorage.setItem("tarefas", JSON.stringify(lista));

            window.location.href = "index.html";
        });
    }

    mostrarTarefas();
});


function mostrarTarefas() {
    const container = document.getElementById("containerTarefas");
    if (!container) return;

    const lista = JSON.parse(localStorage.getItem("tarefas")) || [];

    container.innerHTML = "";

    if (lista.length === 0) {
        container.innerHTML = `<p class="sem-tarefas">Nenhuma tarefa cadastrada.</p>`;
        return;
    }

    lista.forEach(tarefa => {
        const card = document.createElement("div");
        card.classList.add("task-card");

        card.innerHTML = `
            <p><strong class="${tarefa.prioridade === "Urgente" ? "urgente" : ""}">
                ${tarefa.prioridade}
            </strong></p>

            <p><strong>Descrição:</strong> ${tarefa.descricao}</p>
            <p><strong>Local:</strong> ${tarefa.local}</p>
            <p><strong>Matrícula:</strong> ${tarefa.matricula}</p>
            <p><strong>Data Limite:</strong> ${tarefa.dataLimite}</p>

            <p><strong>Recursos:</strong> 
                ${tarefa.recursosNecessarios.length > 0 
                    ? tarefa.recursosNecessarios.join(", ")
                    : "Nenhum"}
            </p>
        `;

        container.appendChild(card);
    });
}
