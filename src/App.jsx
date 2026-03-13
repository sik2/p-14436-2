import { useState } from 'react'

function App() {
    const [todos, setTodos] = useState(['공부하기', '야구보기', '저녁먹기'])

    const hadleOnsubmit = (e) => {
        e.preventDefault()
        const form = e.target

        setTodos([form.todo.value, ...todos])
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
                        {todo}
                        <button onClick={() => removeTodo(i)}>X</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
