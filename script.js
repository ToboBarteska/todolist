document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('addTaskButton');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Přidání úkolu
    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Prosím, zadejte úkol!');
            return;
        }

        const newTask = document.createElement('li');
        newTask.innerHTML = `
            <span>${taskText}</span>
            <button class="removeBtn">Odstranit</button>
        `;
        
        taskList.appendChild(newTask);
        taskInput.value = '';
    });

    // Odstranění úkolu
    taskList.addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('removeBtn')) {
            const task = event.target.parentElement;
            task.remove();
        }

        // Odkřížení úkolu (splněný úkol)
        if (event.target && event.target.tagName === 'SPAN') {
            const task = event.target.parentElement;
            task.classList.toggle('completed');
        }
    });
});
