const loadBtn = document.getElementById("loadBtn");
const clearBtn = document.getElementById("clearBtn");
const todoTable = document.getElementById("todoTable");
const tableBody = document.getElementById("tableBody");


loadBtn.addEventListener("click", () => {

    fetch("https://jsonplaceholder.typicode.com/todos/")
        .then(response => response.json())
        .then(data => {

            tableBody.innerHTML = "";

            data.forEach(todo => {
                const row = document.createElement("tr");

                const userId = document.createElement("td");
                const taskId = document.createElement("td");
                const title = document.createElement("td");
                const status = document.createElement("td");

                userId.innerHTML = todo.userId;
                taskId.innerHTML = todo.id;
                title.innerHTML = todo.title;

                if (todo.completed == true) {
                    status.innerHTML = "Completed";
                    status.className = "completed";
                } else {
                    status.innerHTML = "Not Completed";
                    status.className = "not-completed";
                }

                row.appendChild(userId);
                row.appendChild(taskId);
                row.appendChild(title);
                row.appendChild(status);

                tableBody.appendChild(row);
            });

            todoTable.style.display = "table";

        })
        .catch(error => {
            console.log(error);
            alert("Error loading data from the API.");
        });
});

clearBtn.addEventListener("click", () => {
    tableBody.innerHTML = "";
    todoTable.style.display = "none";
});