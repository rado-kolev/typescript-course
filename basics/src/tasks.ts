// *** Selecting an element first way - using ? (optional)

// const btn = document.querySelector('.btn');

// btn?.addEventListener('click', () => {
//   console.log('something');
// });

// if (btn) {
//   //* do something
// }


// *** Selecting an element second way - using !
// ? The ! operator in TypeScript is officially known as the Non-null assertion operator. It is used to assert that its preceding expression is not null or undefined.

// const btn = document.querySelector('.btn')!;

// btn.addEventListener('click', () => {
//   console.log('something');
// });


// *** Selecting an element third way
// ? Element is the most general base class from which all element objects (i.e. objects that represent elements) in a Document inherit. It only has methods and properties common to all kinds of elements. More specific classes inherit from Element.

// const btn = document.querySelector<HTMLButtonElement>('.selector')!;

// btn.disabled = true;

// const btn1 = document.querySelector('.selector')! as HTMLButtonElement;

// btn1.disabled = true;



// TODO *** Working on the Tasks app ***

const taskForm = document.querySelector<HTMLFormElement>('.form');
const formInput = document.querySelector<HTMLInputElement>('.form-input');
const taskListElement = document.querySelector<HTMLUListElement>('.list');

// Task type
type Task = {
  description: string;
  isCompleted: boolean;
};

const tasks: Task[] = loadTasks();

tasks.forEach(renderTask);

// Load tasks from localStorage
function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem('tasks');
  return storedTasks ? JSON.parse(storedTasks) : [];
}


// Event listener for form submission
taskForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const taskDescription = formInput?.value;
  if (taskDescription) {
    const task: Task = {
      description: taskDescription,
      isCompleted: false,
    };

    // Add task to list
    addTask(task);

    // Render tasks
    renderTask(task);

    // Update local storage
    updateStorage();

    formInput.value = '';
    return;
  }
  alert('Please enter a task description');
});

// Add task function
function addTask(task: Task): void {
  tasks.push(task);
  // console.log(tasks);
}

// Render tasks function
function renderTask(task: Task): void {
  const taskElement = document.createElement('li');
  taskElement.textContent = task.description;

  // Checkbox
  const taskCheckbox = document.createElement('input');
  taskCheckbox.type = 'checkbox';
  taskCheckbox.checked = task.isCompleted;

  // Toggle checkbox
  taskCheckbox.addEventListener('change', () => {
    task.isCompleted = !task.isCompleted;
    updateStorage();
  });

  taskElement.appendChild(taskCheckbox);
  taskListElement?.appendChild(taskElement);
}

// Update tasks in local storage
function updateStorage(): void {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}