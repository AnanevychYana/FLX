let tasks = [];
let taskList = document.getElementById('tasks');

function changeCheck(event) {
	let clickedListItem = event.target.parentElement;
	let i = 0;
	while( (clickedListItem = clickedListItem.previousSibling) !== null ) {
		i++;
	}
	if (!tasks[i].checked) {
		tasks[i].checked = true;
		removeListItems();
		drawTask();
	}
}

function deleteElement(event) {
	let clickedListItem = event.target.parentElement;
	let i = 0;
	while( (clickedListItem = clickedListItem.previousSibling) !== null ) {
		i++;
	}
	let elementsCountToRemove = 1;
	let elementsCountToEnable = 9;
	tasks.splice(i, elementsCountToRemove);
	if (tasks.length === elementsCountToEnable) {
		document.getElementById('input').disabled = false;
		document.getElementById('warning-message').innerHTML = '';
	}
	removeListItems();
	drawTask();
}

function drawTask() {
	for (let i = 0; i < tasks.length; i++) {
		let listItem = document.createElement('li');
		let checkIcon = document.createElement('i');
		checkIcon.classList.add('material-icons');
		checkIcon.innerHTML = tasks[i].checked ? 'check_box' : 'check_box_outline_blank';
		checkIcon.onclick = changeCheck;
		listItem.appendChild(checkIcon);
		let taskName = document.createElement('p');
		taskName.innerHTML = tasks[i].name;
		listItem.appendChild(taskName);
		let deleteIcon = document.createElement('i');
		deleteIcon.classList.add('material-icons');
		deleteIcon.innerHTML = 'delete';
		deleteIcon.onclick = deleteElement;
		listItem.appendChild(deleteIcon);
		taskList.appendChild(listItem);
	}
}

function addNewTask() {
	let taskName = document.getElementById('input').value;
	let maxTasksCount = 10;
	if (taskName.trim() !== '' && tasks.length !== maxTasksCount) {
		addTask(taskName);
		removeListItems();
		drawTask();
		if (tasks.length === maxTasksCount) {
			document.getElementById('input').disabled = true;
			document.getElementById('warning-message').innerHTML =
				'Maximum item per list are created';
		}
	}
}

function removeListItems() {
	let childNodes = taskList.childNodes;
	let one = 1;
	let maxIndex = childNodes.length - one;
	let minIndex = 0;
	for (let i = maxIndex; i >= minIndex; i--) {
		taskList.removeChild(childNodes[i]);
	}
}

function addTask (taskName) {
	tasks.push({
		name: taskName,
		checked: false
	})
}

