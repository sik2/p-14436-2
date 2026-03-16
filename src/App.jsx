import { useRef, useState } from 'react'
import TodoWriteForm from './components/TodoWriteForm'

function App() {
    const lastId = useRef(4)

    const [todos, setTodos] = useState([
        { id: 3, text: '공부하기', checked: true },
        { id: 2, text: '야구보기', checked: false },
        { id: 1, text: '저녁먹기', checked: true },
    ])

    const hadleOnsubmit = (e) => {
        e.preventDefault()
        const form = e.target

        setTodos([{ id: lastId.current, text: form.todo.value, checked: false }, ...todos])
        lastId.current++
    }

    const removeTodo = (seletedId) => {
        const fileterTodos = todos.filter((todo) => todo.id != seletedId)
        setTodos(fileterTodos)
    }

    const ToggleTodo = (seletedId) => {
        const updateTodos = todos.map((todo) => (todo.id == seletedId ? { ...todo, checked: !todo.checked } : todo))
        setTodos(updateTodos)
    }

    return (
        <>
            <TodoWriteForm hadleOnsubmit={hadleOnsubmit} />
            <ul>
                {todos.map((todo, i) => (
                    <li key={todo.id}>
                        <input type="checkbox" onChange={() => ToggleTodo(todo.id)} checked={todo.checked} />
                        {JSON.stringify(todo.checked)}
                        {todo.id} / {todo.text}
                        <button onClick={() => removeTodo(todo.id)}>X</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
