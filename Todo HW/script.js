const input = document.getElementById("input");
const addTasksButton = document.getElementById("id2");
const error = document.getElementById("error");
const todo = document.getElementById("list"); 
const toggleBtn = document.querySelector(".moonToggle");
const todosInput = document.querySelector(".todo");

let tasks = [];

function addTask() {
  if (tasks.length >= 10) {
    alert("Maximum tasks limit reached!");
    return;
  }

  if (input.value === "") {
    error.style.color = "red";
    error.innerHTML = "Can't be empty!";
  } else {
    tasks.push(input.value);

    if (!todo.querySelector("ul")) {
      const ul = document.createElement("ul");
      todo.appendChild(ul);
    }

    const ul = todo.querySelector("ul");

    const li = document.createElement("li");
    li.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center ; margin-left:-20px; padding-right-20px ">
          <input type="checkbox" class="check">
          <span class="list-item">${input.value}</span>
          <button class="btn-1" onclick="Delete">X</button>
      </div>
    `;
    ul.appendChild(li);

    const checkbox = li.querySelector(".check");
    const listItem = li.querySelector(".list-item");
    const deleteButton = li.querySelector(".btn-1");
    deleteButton.addEventListener("click", deleteBtn);
    checkbox.addEventListener("click", () => {
      if (checkbox.checked) {
        listItem.style.textDecoration = "line-through";
        listItem.style.color = "gray";
      } else {
        listItem.style.textDecoration = "none";
        listItem.style.color = "initial";
      }
    });

    ul.style.listStyle = "none";

    input.value = "";
  }
};


addTasksButton.addEventListener("click", addTask);

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});



function deleteBtn(event) {
  event.target.closest("li").remove();
  const taskIndex = tasks.indexOf(
    event.target.previousElementSibling.textContent
  );
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
  }
  if (tasks.length === 0) {
    tasks = [];
    todo.querySelector("li").style.borderBottom = "none";
  }
}

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("darkmode");
  document.body.style.backgroundColor = toggleBtn.classList.contains("darkmode")
    ? "#171823"
    : "white";
    todo.style.backgroundColor = toggleBtn.classList.contains("darkmode")
      ? "#25273d"
    : "white";
  todosInput.style.backgroundColor = toggleBtn.classList.contains("darkmode")
    ? "#25273d"
    : "white";
  input.style.backgroundColor = toggleBtn.classList.contains("darkmode")
    ? "#25273d"
    : "white";
});
