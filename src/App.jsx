import { useEffect, useMemo, useState } from 'react'
import './App.css'

const starterTasks = [
  { id: 1, text: 'Review the assignment brief', done: true },
  { id: 2, text: 'Build the task manager UI', done: false },
  { id: 3, text: 'Save the submission notes', done: false },
]

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = window.localStorage.getItem('ai-task-manager')
    return storedTasks ? JSON.parse(storedTasks) : starterTasks
  })
  const [taskText, setTaskText] = useState('')
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    window.localStorage.setItem('ai-task-manager', JSON.stringify(tasks))
  }, [tasks])

  const visibleTasks = useMemo(() => {
    if (filter === 'active') return tasks.filter((task) => !task.done)
    if (filter === 'completed') return tasks.filter((task) => task.done)
    return tasks
  }, [filter, tasks])

  const remaining = tasks.filter((task) => !task.done).length
  const completed = tasks.filter((task) => task.done).length

  function addTask(event) {
    event.preventDefault()
    const text = taskText.trim()

    if (!text) return

    setTasks((currentTasks) => [
      { id: Date.now(), text, done: false },
      ...currentTasks,
    ])
    setTaskText('')
  }

  function toggleTask(id) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    )
  }

  function deleteTask(id) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id))
  }

  function clearCompleted() {
    setTasks((currentTasks) => currentTasks.filter((task) => !task.done))
  }

  return (
    <main className="app-shell">
      <section className="card main-card">
        <div className="hero">
          <p className="eyebrow">AI-assisted homework submission</p>
          <h1>Task Manager</h1>
          <p className="subtext">
            A compact React app built to demonstrate add, complete, filter, and
            persistence flows.
          </p>
        </div>

        <form className="task-form" onSubmit={addTask}>
          <label className="sr-only" htmlFor="task">
            Add a task
          </label>
          <input
            id="task"
            name="task"
            type="text"
            placeholder="What needs to be done?"
            value={taskText}
            onChange={(event) => setTaskText(event.target.value)}
          />
          <button type="submit">Add task</button>
        </form>

        <div className="toolbar">
          <div className="stats" aria-label="Task summary">
            <span>{remaining} active</span>
            <span>{completed} completed</span>
          </div>

          <div className="filters" role="tablist" aria-label="Task filters">
            {['all', 'active', 'completed'].map((option) => (
              <button
                key={option}
                type="button"
                className={filter === option ? 'active' : ''}
                aria-pressed={filter === option}
                onClick={() => setFilter(option)}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <ul className="task-list" aria-label="Task list">
          {visibleTasks.length === 0 ? (
            <li className="empty-state">Nothing to show in this view.</li>
          ) : (
            visibleTasks.map((task) => (
              <li key={task.id} className={`task-item ${task.done ? 'done' : ''}`}>
                <label className="task-label">
                  <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => toggleTask(task.id)}
                  />
                  <span>{task.text}</span>
                </label>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => deleteTask(task.id)}
                  aria-label={`Delete ${task.text}`}
                >
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>

        {completed > 0 && (
          <button type="button" className="ghost-btn" onClick={clearCompleted}>
            Clear completed
          </button>
        )}
      </section>

      <section className="card notes-card">
        <h2>Submission notes</h2>
        <p>
          This app was created as a small React example for the homework assignment.
          It highlights how AI can accelerate the first draft and how a few manual
          refinements improve usability.
        </p>
        <ul>
          <li>Persistent storage keeps tasks available after reloads.</li>
          <li>Accessible labels and keyboard-friendly controls were added manually.</li>
          <li>The layout was polished for a cleaner presentation.</li>
        </ul>
      </section>
    </main>
  )
}

export default App
