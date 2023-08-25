document.addEventListener("DOMContentLoaded", function () {
    const pending = document.getElementById("pending-tasks-list");
    const completed = document.getElementById("completed-tasks-list");
    const addTask = document.getElementById("task-form");
    const titleTask = document.getElementById("task-title");
    const due = document.getElementById("due-date");

    addTask.addEventListener("submit", e => {
        e.preventDefault();

        const taskInput = titleTask.value;

        // Adding a div
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task-item'); // Add a class for styling

        // Adding li for task text
        const taskList = document.createElement('li');
        taskList.classList.add('task-text'); // Add the task-text class
        taskList.textContent = taskInput;
        taskContainer.appendChild(taskList);

        //Adding due date
        const taskDate = document.createElement('span');
        taskDate.classList.add('due-date');
        taskDate.textContent = due.value;
        taskContainer.appendChild(taskDate);

        // Adding complete button
        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.classList.add('complete-btn');
        taskContainer.appendChild(completeBtn);

        // Adding delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        taskContainer.appendChild(deleteBtn);

        // Append the whole task container to the pending tasks list
        pending.appendChild(taskContainer);

        // Clear the task input
        titleTask.value = "";

     //Complete button Functionality
        completeBtn.addEventListener("click", event => {
            const clickedButton = event.target;

            //adding div for completed task
            const completeContainer = document.createElement('div');
            completeContainer.classList.add('complete-container');

            if (clickedButton.classList.contains('complete-btn')) {
                const completedTaskText = clickedButton.parentElement.querySelector('li').textContent;
                const completedTask = document.createElement('li');
                completedTask.classList.add('completed-task');
                completedTask.textContent = completedTaskText;
                completeContainer.appendChild(completedTask);

                //Showing due date
                const completedTaskDate = document.createElement('span');
                completedTaskDate.textContent = taskDate.value;
                completeContainer.appendChild(taskDate);

                //Delete Button in Completed Task
                const comDelBtn = document.createElement('button');
                comDelBtn.textContent = 'Delete';
                comDelBtn.classList.add('com-delete-btn');
                completeContainer.appendChild(comDelBtn);

                completed.appendChild(completeContainer);

                comDelBtn.addEventListener("click", () => {
                    completed.removeChild(completeContainer);
                });
                clickedButton.parentElement.remove();
            }
        });

        // Delete functionality for pending Taks
        deleteBtn.addEventListener("click", event => {
            const clickedDelBtn = event.target;
            if (clickedDelBtn.classList.contains('delete-btn')) {
                pending.removeChild(clickedDelBtn.parentElement);

            }
        });
    });
});