function addTask() {
	const taskInput = document.getElementById("taskInput");
	const taskList = document.getElementById("taskList");

	if (taskInput.value.trim() !== "") {
		const li = document.createElement("li");
		li.innerHTML = `
          <span>${taskInput.value}</span>
          <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
      `;
		taskList.appendChild(li);
		taskInput.value = "";

		// Smooth scroll to the new task
		li.scrollIntoView({ behavior: "smooth", block: "end" });
	}
}

function deleteTask(button) {
	const li = button.parentElement;
	li.style.animation = "slideOut 0.3s ease-out";
	li.addEventListener("animationend", function () {
		li.remove();
	});
}

// Add task when Enter key is pressed
document.getElementById("taskInput").addEventListener("keypress", function (e) {
	if (e.key === "Enter") {
		addTask();
	}
});

// Add slideOut animation
const style = document.createElement("style");
style.textContent = `
  @keyframes slideOut {
      to { opacity: 0; transform: translateX(100%); }
  }
`;
document.head.appendChild(style);
