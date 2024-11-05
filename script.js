// script.js

// Função para verificar se o Enter foi pressionado e adicionar tarefa
function verificarEnter(event) {
    if (event.key === 'Enter') {
        adicionarTarefa();
    }
}

// Adicionar nova tarefa
function adicionarTarefa() {
    const input = document.getElementById('novaTarefa');
    const titulo = input.value.trim();

    if (titulo) {
        const lista = document.getElementById('listaTarefas');

        // Criar um item da lista (li) para a nova tarefa
        const li = document.createElement('li');
        li.textContent = titulo;
        
        // Adiciona evento para marcar tarefa como concluída
        li.onclick = () => {
            li.classList.toggle('completed');
            atualizarContador();
        };

        // Botão de remover tarefa
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.className = 'remove';
        botaoRemover.onclick = (e) => {
            e.stopPropagation(); // Impede de marcar como concluída ao remover
            li.remove();
            atualizarContador();
        };

        li.appendChild(botaoRemover);
        lista.appendChild(li);

        input.value = '';
        atualizarContador();
    }
}

// Atualizar o contador de tarefas restantes
function atualizarContador() {
    const tarefas = document.querySelectorAll('#listaTarefas li');
    const pendentes = Array.from(tarefas).filter(tarefa => !tarefa.classList.contains('completed')).length;
    document.getElementById('contadorTarefas').textContent = `Tarefas restantes: ${pendentes}`;
}
