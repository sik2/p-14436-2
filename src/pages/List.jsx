import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TodoItem from '../components/TodoItem'

function List() {
    const { id } = useParams()
    const [todo, setTodo] = useState({})

    useEffect(() => {
        fetch(`https://dummyjson.com/todos/${id}`)
            .then((res) => res.json())
            .then((res) => setTodo(res))
    }, [])

    return <TodoItem todo={todo} />
}

export default List
