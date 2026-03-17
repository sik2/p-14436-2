import { useEffect } from 'react'
import TodoList from '../components/TodoList'
import TodoWriteForm from '../components/TodoWriteForm'
import { useTodos } from '../context/TodoContext'

function Main() {
    const { setTodos } = useTodos()
    useEffect(() => {
        fetch('https://dummyjson.com/todos')
            .then((res) => res.json())
            .then((res) => setTodos(res.todos))
    }, [])

    return (
        <>
            <TodoWriteForm />
            <TodoList />
        </>
    )
}

export default Main
