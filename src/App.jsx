import { useState } from 'react'

function App() {
    const [todos, setTodos] = useState([
        { text: '공부하기', checked: false },
        { text: '야구보기', checked: false },
        { text: '저녁먹기', checked: false },
    ])

    const hadleOnsubmit = (e) => {
        e.preventDefault()
        const form = e.target

        setTodos([{ text: form.todo.value, checked: false }, ...todos])
    }

    const removeTodo = (seletedIndex) => {
        const fileterTodos = todos.filter((todo, index) => index != seletedIndex)
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
                    <li key={i}>
                        <input type="checkbox" />
                        {i} / {todo.text}
                        <button onClick={() => removeTodo(i)}>X</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
