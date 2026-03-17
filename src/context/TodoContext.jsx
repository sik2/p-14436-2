import { createContext, useContext, useRef, useState } from 'react'

const TodoContext = createContext()

export function TodoProvider({ children }) {
    const lastId = useRef(4)

    const [todos, setTodos] = useState([])

    const addTodo = (text) => {
        setTodos([{ id: lastId.current, text, checked: false }, ...todos])
        lastId.current++
    }

    const removeTodo = (seletedId) => {
        const fileterTodos = todos.filter((todo) => todo.id != seletedId)
        setTodos(fileterTodos)
    }

    const toggleTodo = (seletedId) => {
        const updateTodos = todos.map((todo) => (todo.id == seletedId ? { ...todo, checked: !todo.checked } : todo))
        setTodos(updateTodos)
    }

    const value = {
        todos,
        addTodo,
        removeTodo,
        toggleTodo,
        setTodos,
    }

    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

export function useTodos() {
    const context = useContext(TodoContext)

    return context
}
