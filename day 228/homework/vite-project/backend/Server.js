import cors from "cors";
import express from "express";
const app = express();
const PORT = 3001;

const INVALID_PARAMS_ERROR = 'invalid text provided';
const NOT_FOUND_ERROR = 'resource you\'re looking for couldn\'t be found';

app.use(express.json());
app.use(cors());

const tasks = [
  { text: 'brush your stinky teeth', id: 0, completed: false },
  { text: 'go to a club', id: 1, completed: false },
  { text: 'read a book (how to get less money)', id: 2, completed: false },
  { text: 'kiss your kitty', id: 3, completed: false },
  { text: 'go to sleep and dream you finally understand big O notation', id: 4, completed: false }
];

let curId = tasks.length - 1;
const MAX_TASK_LENGTH = 100;
const MIN_TASK_LENGTH = 3;

const findTask = id => tasks.find(task => task.id == id);
const isValidTaskText = text => typeof text === "string" && text.length > MIN_TASK_LENGTH && text.length < MAX_TASK_LENGTH;

const deleteTask = id => {
  const index = tasks.findIndex(task => task.id == id);
  if (index === -1) return null;
  const [deleted] = tasks.splice(index, 1);
  return deleted;
};

const deleteCompletedTasks = () => {
  for (let i = tasks.length - 1; i >= 0; i--) {
    if (tasks[i].completed) tasks.splice(i, 1);
  }
};

const getRandomTask = () => {
  if (tasks.length === 0) return null;
  return tasks[Math.floor(Math.random() * tasks.length)];
};

app.get('/tasks', (req, res) => {
  let filteredTasks = tasks;
  if (req.query.done === 'true') filteredTasks = tasks.filter(t => t.completed);
  if (req.query.done === 'false') filteredTasks = tasks.filter(t => !t.completed);
  res.status(200).json({ tasks: filteredTasks });
});

app.get('/tasks/random', (req, res) => res.status(200).json({ randomTask: getRandomTask() }));

app.post('/tasks', (req, res) => {
  const { text } = req.body;
  if (!isValidTaskText(text)) return res.status(400).json({ error: INVALID_PARAMS_ERROR });
  curId++;
  const task = { text, id: curId, completed: false };
  tasks.push(task);
  res.status(201).json({ message: "task added successfully", task });
});

app.delete('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const task = findTask(id);
  if (!task) return res.status(404).json({ error: NOT_FOUND_ERROR });
  deleteTask(id);
  res.status(200).json({ message: "task deleted successfully", deletedTask: task });
});

app.delete('/tasks', (req, res) => {
  const oldTasks = [...tasks];
  deleteCompletedTasks();
  res.status(200).json({ message: 'completed tasks deleted', oldTasks, newTasks: tasks });
});

app.get('/web', (req, res) => {
  res.send(`
    <html>
      <head><title>Todo List</title></head>
      <body>
        <h2>Todo List</h2>
        <ul>
          ${tasks.map(t => `<li>${t.text}</li>`).join('')}
        </ul>
      </body>
    </html>
  `);
});

app.listen(PORT, () => console.log(`server listening at http://localhost:${PORT}`));
