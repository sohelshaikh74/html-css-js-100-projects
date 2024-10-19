const tasks = document.querySelectorAll('.task');
const columns = document.querySelectorAll('.column');

// Loop through all task elements and add drag events
tasks.forEach(task => {
    task.addEventListener('dragstart', dragStart);
    task.addEventListener('dragend', dragEnd);
});

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => e.target.style.display = "none", 0); // Make task disappear during the drag
}

function dragEnd(e) {
    e.target.style.display = "block"; // Make task reappear
}

// Loop through all columns to handle drop events
columns.forEach(column => {
    column.addEventListener('dragover', dragOver);
    column.addEventListener('drop', drop);
});

function dragOver(e) {
    e.preventDefault(); // Necessary to allow drop
}

function drop(e) {
    e.preventDefault();
    
    const taskId = e.dataTransfer.getData('text/plain');
    const task = document.getElementById(taskId);

    // Ensure we drop only into a column and not inside an <h2> or other child elements
    const target = e.target.classList.contains('column') ? e.target : e.target.closest('.column');
    if (target) {
        target.appendChild(task);
    }
}
