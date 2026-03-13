import { useState } from 'react'

function App() {
    const [todoId, setTodoId] = useState(4)

    const [todos, setTodos] = useState([
        { id: 3, text: '공부하기', checked: false },
        { id: 2, text: '야구보기', checked: false },
        { id: 1, text: '저녁먹기', checked: false },
    ])

    const hadleOnsubmit = (e) => {
        e.preventDefault()
        const form = e.target

        setTodos([{ id: todoId, text: form.todo.value, checked: false }, ...todos])
        setTodoId(todoId + 1)
    }

    const removeTodo = (seletedId) => {
        const fileterTodos = todos.filter((todo, index) => todo.id != seletedId)
        setTodos(fileterTodos)
    }

    return (
        <>
            <form onSubmit={hadleOnsubmit}>
                <input type="text" name="todo" />
                <button>입력</button>
            </form>

            <ul>
                {todos.map((todo, i) => (
                    <li key={todo.id}>
                        <input type="checkbox" />
                        {todo.id} / {todo.text}
                        <button onClick={() => removeTodo(todo.id)}>X</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
