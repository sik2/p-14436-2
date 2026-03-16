function TodoList({ todos, removeTodo, ToggleTodo }) {
    return (
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
    )
}

export default TodoList
